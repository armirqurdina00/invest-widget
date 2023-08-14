import ContextProvider from './WidgetContextProvider'
import Container from './Container'

const App = () => {
    return (
      <>
        <div className='relative w-full h-screen bg-[#ddd]'>
          <ContextProvider>
            <Container />
          </ContextProvider>
        </div>  
      </>
    );
}
 
export default App