import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_77053') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "FX:USDJPY",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "3",
            locale: "en_US",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_legend: true,
            withdateranges: true,
            range: "1D",
            save_image: false,
            watchlist: ["USDMXN","EURMXN"],
            details: true,
            hotlist: true,
            calendar: true,
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            container_id: "tradingview_77053"
          });
        }
      }
    },
    []
  );

  return (
    <div>
        <div className='tradingview-widget-container'>
        <div id='tradingview_77053' style={{height: '300px'}} />
        </div>
    </div>
  );
}