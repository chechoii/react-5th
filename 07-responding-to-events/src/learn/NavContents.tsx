

function NavContents() {

    // 컴포넌트 안에서 대상을 찾거나 수정하는 행위 X
    // a태그를 잡아서 클릭이벤트를 바인딩

    // const firsLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
    // firsLink.dataset.element = 'jsx-markup'
    
    const handleClickFirstLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // console.log(e);
        console.log('first clicked');

        // 이벤트 헨들러 안에서는 사이드 이펙트를 처리하기에 아주 완벽한 공간

        // console.log(e.currentTarget);
        e.currentTarget.dataset.element = 'jsx-markup';
        
    }

    const handleClickSecondLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.currentTarget.dataset.element = 'responding-to-events';
    }


  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
        <a href="#jsx-markup" onClick={handleClickFirstLink}>JSX 마크업</a>
        <a href="#responding-to-events" onClick={handleClickSecondLink}>이벤트 응답</a>

    </nav>
  )
}

export default NavContents