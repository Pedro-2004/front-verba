import {Card, CardHeader,CardTitle,CardDescription,CardContent,CardFooter} from '@/components/ui/card'

const App = () => {
  return (
    <>

    <div className='min-h-screen flex items-center justify-center'>

    <Card className=' w-[550px] h-[600px] '>
  <CardHeader>
    <CardTitle>Entrar</CardTitle>

    <CardDescription>
      Acesse sua conta
    </CardDescription>
  </CardHeader>

  <CardContent>
    Aqui ficam os inputs
  </CardContent>

  <CardFooter>
    Aqui pode ficar o botão
  </CardFooter>
</Card>
    </div>
    </>
  )
}

export default App