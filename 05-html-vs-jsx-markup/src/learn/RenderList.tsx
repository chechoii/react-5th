import { Fragment } from "react/jsx-runtime";



interface Props {
    reactLibrary: ReactLibrary;
    items:StatusMessageWithId[];
}

function RenderList({reactLibrary, items}:Props) {

    const demoList = [];
    for(const a of items){
        demoList.push(<li key={a.id}>{a.message}</li>)
        /* 배열에 li태그의 값을 넣는다. */
    }

    const _demoList = items.map(({id, message}:StatusMessageWithId) => (
        <li key={id}>{message}</li>
    ))

    const renderDemoList = () => items.map(({id, message}) => <li key={id}>{message}</li>)

/*     const _renderDemoList = () => {
        return items.map(({id, message}) => {
            return <li key={id}>{message}</li>
        })
    } */

    // console.log(reactLibrary);

    /* 객체의 리스트 렌더링 */

    const renderDefinitionList = (data:ReactLibrary) => {
        const definitionItem = Object.entries(data).map(([key, value]) => ( // {} 면 return 해줘야해서 ()로 바꿈
            <Fragment key={key}> {/* key를 설정해야할 경우에는 직접 <Fragment>태그 사용하기! <> 대신 */}
                <dt>{key}</dt>
                <dd>{value}</dd>
            </Fragment>   
        ))
        return <dl className="reactLibrary">{definitionItem}</dl>
    }

   



  return (
    <>
        <dt>리스트 렌더링(list rendering)</dt>
        <dd>
            <p>
                React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
                렌더링합니다.
            </p>
            {renderDefinitionList(reactLibrary)}
        </dd>
        <dd>
            <ul>
                {/* 표현식을 사용한 리스트 렌더링 */}
                {items.map(({id, message}:StatusMessageWithId) => (
                    <li key={id}>{message}</li>
                ))}
            </ul>
            <hr />
            <ul>
                {/* for ...of를 사용한 리스트 렌더링 */}
                {demoList}
            </ul>
            <hr />
            <ul>
                {/* 배열의 메서드를 사용한 리스트 렌더링 */}
                {_demoList}
            </ul>
            <hr />
            <ul>
                {/* 함수를 사용한 리스트 렌더링 */}
                {renderDemoList()}
            </ul>
        </dd>
        <dd>
            <p>상태 메시지(status message) 배열을 역순 정렬하여 랜더링합니다.</p>
            {/* 역순 리스트 렌더링 */}
            {/* {[...items].reverse().map(({id, message}) => (
                <li key={id}>{message}</li>
            ))} */}
            {/* 새로운 배열을 반환해서 뒤집는 / 원본값 훼손 X : toReversed()  */}
            {items.toReversed().map((item, index) => (
                <li key={item.id ?? index}>{item.message}</li>
            ) )
            
            }
        </dd>
    </>
  )
}

export default RenderList