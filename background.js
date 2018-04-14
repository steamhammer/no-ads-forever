const sleep = (ms) => {
  const startTime = new Date();
  let random;
  while ((new Date().getTime() - startTime) < ms) {
    random = Math.random();
  }
  return random;
};

const blackList = [
  '*://*.piguiqproxy.com/*',
  '*://*.amgload.net/*',
  '*://*.dsn-fishki.ru/*',
  '*://*.rcdn.pro/*',
  '*://*.smcheck.org/*'
];

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        // chrome.tabs.sendMessage(details.tabId, { eventType: 'beforeRequest' }, () => {});
        const x = sleep(100);
        return { cancel: !!(x + 1) };
    },
    { urls: blackList },
    ['blocking']
);