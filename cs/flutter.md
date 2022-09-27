    ⁃	flutter gen => 이미지 asset 관리
    ⁃	flutter version management => 버전 관리
    ⁃	안드 개발자 입장에서 위젯단위로 덕지덕지 붙혀 개발하는데 이 점은 어떤가 ? => 불편해서 최대한 위젯을 컴포넌트화 시켜서 작업
    ⁃	제페토 pc 버전 런처를 플러터로 개발했음
    ⁃	테스트 부분에 문제가 없어서 bloc가 좋음
    ⁃	모든 부분이 cubic 사용
    ⁃	Bloc 패턴 사용 방법 설명
    ⁃	Ui 테스트 : golden snapshot test
    ⁃	getx는 컨트롤러에서 ui를 다 읽어와야함 ? bloc는 필요한 state만 ui에서 알고있으면 되기 때문에
    •	ListView.buillder 내부의 shrinkWrap :true 속성이 스크롤 양이 많아지면 junk를 발생시킴
    •	이에 대한 해결법으로 SliverList를 이용한 하면 junk를 해소시킬 수 있음
    •	이와 같이 커스텀방식으로 대응하여 사용했음
    ⁃	Animation
    ⁃	리스너를 달아 추적하는 경우 필요한 값만 리스너 내부에서 처리하고 이외의 값은 밖에서 처리
    ⁃	플러터에서 제공하는 에니메이션 위젯이 많음 최대한 활용하자
    ⁃	Repaint
    ⁃	CircularProgressIndicator의 경우 한번의 서클이 돌 때 마다 계속해서 전체 화면이 리페인팅 됌. 디버그 모드 확인가능
    ⁃	RapaintBoundary를 활용하여 내부에서 CircularProgressIndicator 사용하면 한번의 repaint가능 **
    ⁃	Const
    ⁃	메모리의 올라가있는 인스턴스 활용하자
    ⁃	Padding Sizedbox Align 등…
    ⁃	Const 적용시 크러시가 발생하는 부분이 많은데, 네이버의 경우 list나 map 요소 내부에는 const사용을 자제했음 **
    ⁃	지금까지는 많은 사용을 못했지만 앞으로 최대한 적용 예정
    ⁃	Const 위젯은 빌드시 한번 호출 이후 더 이상 호출하지 않음
    ⁃	stl stf 최대한 나눠 사용, 페이지를 단위로 컴포넌트로 나누고 stl 를 최대한 사용하는 것이 유리함
    ⁃	FPS영향도
    ⁃	IntrinsicWidgets 은 비용이 많이 들고 최악의 경우 트리 깊이가 o(n2), 길이를 찾기 위해 위젯 트리 탐색, 가능한 피하는게 유리
    ⁃	indexedStack stack에 정의된 모든 위젯을 로드함. 따라서 탭 중 에니메이션 사용 시 화면에 노출되지 않아도 계속 영향을 받음
    ⁃	쿠퍼티노 탭스케폴드 중 tabSwitchingView사용을 적극 권장함 **
    ⁃	인덱스에 해당하는 탭만 로드 하기 때문에 영향을 받지 않음
    ⁃	내부에 offstage위젯을 사용하기 때문에 비활성화 영향 x
    ⁃	네이버는 개발자 모드를 따로 만들어서 성능최적화 트레킹
    ⁃	profile모드를 그냥 화면에 띄워논 모드인듯 shadow, opacity, image(debugInvertOversizedImages : 이미지 오버헤드 기준값을 넘은 경우 색상 반전을 통해 알려줌)

—— 질문
⁃ 비디오 소스 사용시 겪은 버그는 없나? => 비디오 소스 사용 안했음 모름
⁃ 네이버 플러터 3.0.4도입 준비 중 아직은 적용 안함
⁃ 디펜던시 버전에 케럿 안씀 전부 버전 픽스
⁃ 3. 기능 설명 디펜던시 업데이트 대응이 늦어 힘들었다.
⁃ 쿠팡 쿠펀치? 플러터로 만듦
⁃ 객체지향 중 DI, service locator 설명
⁃ 자신은 getx를 적극적으로 도입한다는 스탠스에서 getx업데이트가 너무 광범위한 기능들을 포함하고 있어 점점 소극적으로 변하는 중,
⁃ 아키텍쳐에 대한 내용, getx = service locator 인 이유, service locator는 안티패턴이다, getx를 활용하여 DI방식으로 getx를 사용할 수 있음 ,getx 를 DI컨테이너로 사용하는 방법 , 내용이 엄청 deep
⁃ Getx 안티패턴이라는데 이에 대해서 무슨 생각 => bloc vs get 싸움에 휘말리고 싶지 않음 걍 서비스 성격에 맞게 잘 쓰면 된다 생각

Angela yu 유데미 강의
네이버 블로그 => flutter로 전환 중 많이 진행 됌
플러터 클린코드 => 다트 린트, 이펙티브 다트 https://dart.dev/guides/language/effective-dart
초기 실행 최적화 => 기능별 의존성을 그룹화 그룹화된 기능들을 병렬적으로 실행
플러터 웹 => 플러터 웹 문제 많음, 그래도 공식 플러그인으로 전환중, 부분 커스텀해서 적용중, 플러터와 네이티브 적절히 연결해서 사용 https://www.youtube.com/watch?v=nIqTfAeYc3Y
네트워킹 데이터 처리 => https://pub.dev/packages/freezed, https://pub.dev/packages/retrofit https://pub.dev/packages/json_serializable
Ci cd => https://www.youtube.com/watch?v=XE7arhC6tsc
https://chornthorn.github.io/getx-docs/dependency-management/binding/
