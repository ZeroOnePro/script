# script

일상의 편리함을 가져다 줄 스크립트

- 넷플

- to-do
  - 크롬 익스텐션으로 바꿔서 크롬 오픈될 때마다 자동실행되게 변경 (아래 방법 있음)
  - 티빙, 쿠플 만들어보기
  - 옵저버 패턴이 효율적인지 다시 생각해보기, 일단은 이 아이디어밖에 안떠올랐음

## 1. 넷플릭스 오프닝 건너뛰기 자동으로 클릭

크롬을 열 때마다 스크립트를 자동으로 실행시키기 위해서는 브라우저 확장 프로그램을 사용해야 합니다. 아래는 브라우저 확장 프로그램으로 스크립트를 자동 실행시키는 예시입니다.

1. Manifest 파일 생성:
   먼저, 확장 프로그램의 Manifest 파일을 생성해야 합니다. Manifest 파일은 `manifest.json`이라는 이름으로 저장되어야 합니다.

```json
{
  "manifest_version": 2,
  "name": "자동 실행 스크립트",
  "version": "1.0",
  "permissions": [
    "tabs",
    "http://*/*",
    "https://*/*"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "manifest_version": 2
}
```

2. Background 스크립트 생성:
   다음으로, Background 스크립트를 생성해야 합니다. `background.js`라는 이름으로 파일을 생성하고, 아래 코드를 추가합니다.

```javascript
chrome.tabs.onCreated.addListener(function(tab) {
  // 원하는 스크립트를 실행하는 코드를 여기에 추가합니다.
  // 예: console.log("크롬이 열릴 때마다 실행됩니다.");
});
```

3. 확장 프로그램 설치:
   이제 Chrome 확장 프로그램을 설치해야 합니다.
   - Chrome 메뉴(우상단 세로 점 세 개)를 클릭하고 "설정"을 선택합니다.
   - 좌측 메뉴에서 "확장 프로그램"을 선택합니다.
   - 오른쪽 상단의 "개발자 모드"를 활성화합니다.
   - "압축해제된 확장 프로그램을 로드합니다." 버튼을 클릭하고, 앞서 생성한 Manifest 파일과 Background 스크립트가 있는 폴더를 선택합니다.

이제 Chrome을 열 때마다 스크립트가 자동으로 실행될 것입니다. 원하는 스크립트를 Background 스크립트의 적절한 위치에 추가하고, 필요에 따라 스크립트를 수정하여 사용하시면 됩니다.
