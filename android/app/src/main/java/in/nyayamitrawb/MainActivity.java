package in.nyayamitrawb;

import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.os.Message;
import android.webkit.WebView.WebViewTransport;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Set custom WebChromeClient to handle RazorPay checkout popups
        getBridge().getWebView().setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, Message resultMsg) {
                WebView newWebView = new WebView(MainActivity.this);
                newWebView.getSettings().setJavaScriptEnabled(true);
                newWebView.getSettings().setDomStorageEnabled(true);
                newWebView.getSettings().setAllowFileAccess(true);
                newWebView.getSettings().setAllowContentAccess(true);
                newWebView.setWebViewClient(new android.webkit.WebViewClient());
                newWebView.setWebChromeClient(this);

                WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
                transport.setWebView(newWebView);
                resultMsg.sendToTarget();

                return true;
            }

            @Override
            public void onCloseWindow(WebView window) {
                super.onCloseWindow(window);
            }
        });
    }
}