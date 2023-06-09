# 일정 관리 웹 애플리케이션

## 10.1. 프로젝트 준비

- create-react-app
- sass
- classnames
- react-icons

## 10.2. UI 구성

- `src/components` 아래에 components 생성

### TodoTemplate

- `*.js`,`*.sass`를 생성
- js로 틀을 잡고, css를 적용(css 적용을 위해서 className 세팅)

### TodoInsert

- 오타주의

### TodoListitem

- `icons/md`

### TodoList

## 10.3. 기능 구현

### 10.3.1

- 상태 `useState()` 선언
  ```
  cosnt [todos, setTodos] = useState([{}]);
  ```
- 부모 -> 자식 props 전달시 object로 전달
  - 받을 때 구조분해할당을 통해 `{name}` 꼴로 받으면 편리
- 배열에서 여러 컴포넌트 생성은 `map()` 활용
  ```
  Array.map((item)=>{
    return <component>{item}</component>;
  })
  ```

### 10.3.2

- 일정항목 추가
  - TodoInsert 상태관리
  - App 컴포넌트 todos 배열에 객체 추가
- 전송하고자 하는 곳에서 상태관리
  - `const [value, setValue] = useState('')`
  - `const onChange = useCallback(e=>{setValue(e.target.value)},[])`
  - `... <input value={value} onChange={onChange} />`
- react state 확인을 위해서는 React Developer Tools 사용
- `onSubmit` 지정 위치는 `<form onSubmit={onSubmit}>`
  ```
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      console.log('onSubmit', value);
    },
    [onInsert, value],
  );
  ```
  - `e.preventDefault();` 새로고침을 방지

### 10.3.3

- 상태를 관리하는 컴포넌트에서 함수를 생성하고 prop으로 이벤트 소스로 내려준다.
- 이벤트 소스에서 인자를 넘기려면 `onClick={()=>{onRemove(id)}}` 익명함수로 랩핑한다.
- 삭제
  - `array.filter((element)=>{return bool})`를 사용해 배열을 생성한다.
  - bool true일 때 element를 모아서 배열을 리턴

### 10.3.4

- 수정
  - `array.map((element=>{return element}))`를 사용해 새로운 배열을 생성한다.
  - return 되는 값을 모아서 배열로 리턴
- `!bool`은 true->false, false->true, 단순한 `if`문 `삼항연산자` 활용
