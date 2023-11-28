// rollup.config.js で lwc.config.json の設定を読み込んでいるので path の解決が出来る？
// src 配下の相対 PATH で記述する。
import HelloWorld from 'c/helloWorld';
import MyButton from 'c/myButton';

import WcMyButtonSlot from 'wc/myButtonSlot';

customElements.define('c-hello-world', HelloWorld.CustomElementConstructor);
customElements.define('c-my-button', MyButton.CustomElementConstructor);
customElements.define('wc-my-button-slot', WcMyButtonSlot.CustomElementConstructor);