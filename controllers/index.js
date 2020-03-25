const { Router } = require('express');
const cmd = require('node-cmd');
const crypto = require('crypto');
const renderFile = require('./../middleware/renderFile.js');
const toLogin = require('./../middleware/toLogin.js');
const toProfile = require('./../middleware/toProfile.js');

const router = Router();

const verifySignature = ({ body, headers }, res, next) => {
  const payload = JSON.stringify(body);
  const hmac = crypto.createHmac('sha1', process.env.SECRET);
  const digest = `sha1=${hmac.update(payload).digest('hex')}`;
  const checksum = headers['x-hub-signature'];

  if (!checksum || !digest || checksum !== digest) {
    return res.status(403).send('auth failed');
  }

  return next();
};

router.post('/git', verifySignature, (req, res) => {
  if (req.headers['x-github-event'] === 'push') {
    cmd.get('bash git.sh', (err, data) => {
      if (err) return console.log(err);
      console.log(data);
      cmd.run('refresh');
      return res.status(200).send(data);
    });
  }
});

router.get('/', async (req, res) => {
  renderFile(req, res, 'index');
});

router.get('/discuss', async (req, res) => {
  renderFile(req, res, 'discussion');
});

router.get('/heroes', toLogin, async (req, res) => {
  renderFile(req, res, 'users');
});

router.get('/login', toProfile, async (req, res) => {
  renderFile(req, res, 'login');
});

router.get('/signup', toProfile, async (req, res) => {
  renderFile(req, res, 'signup');
});

router.get('/me', toLogin, async (req, res) => {
  renderFile(req, res, 'user');
});

router.get('/requests', toLogin, async (req, res) => {
  renderFile(req, res, 'offers');
});

router.get('/requests/open', toLogin, async (req, res) => {
  renderFile(req, res, 'request');
});

router.get('/profile', toLogin, async (req, res) => {
  renderFile(req, res, 'profile');
});

router.use((req, { boom }) => {
  boom.notFound();
});

module.exports = router;
