
import GrandChild from './GrandChild'

function Child({username}:{username:string}) {
  return (
    <div style={{
        border:'1px solid gray',
        padding:'10px'
    }}>
        <h3>바뀐다22222</h3>
        <GrandChild username={username} />
    </div>
  )
}
export default Child