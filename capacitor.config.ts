import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.nyayamitrawb',
  appName: 'NyayaMitra — Civil Legal Navigator',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: ['nyayamitrawb.in']
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      backgroundColor: '#0a1e34',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    },
    Network: {},
    Share: {},
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a1e34',
      overlaysWebView: true
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    loggingBehavior: 'none'
  }
};

export default config;