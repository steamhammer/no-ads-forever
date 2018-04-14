(() => {
    let isScriptAttached = false;
    const script = document.createElement('script');
    script.innerHTML = `
      console.log('== window.stop successfully reassigned!');
      window.stop = () => {
       console.log('== Ads script tried to ruin your page, but we stopped it!');
      };
    `;

    const attachScript = () => {
      try {
        document.head.appendChild(script);
        isScriptAttached = true;
      } catch (err) {
        console.log('cannot append script');
        console.log(err.message);
      }
    };

    setTimeout(attachScript, 0);
})();