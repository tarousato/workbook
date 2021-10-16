
### これは何？
* 選択肢式の問題をサクッと作れる下地のシステム
* 出題と選択式はシャフルされる仕組み
* 試験勉強にうってつけ！
### 使い方
* src/dataTest.js を参考に src/data.js を作成
* src/App.js のコメントアウトを以下変更
```javascript
import { dataList } from './data';
//import { dataList } from './dataTest';
```
* 完成！
### dataListの説明
#### que:
- **問題文**を記載するとこ
- '(バッククウォート)を使えば改行で書ける！
#### ans:
* **正解の選択肢**を書くとこ
* 複数のこたえでもok
#### mis:
* **不正解の選択肢**を書くとこ


