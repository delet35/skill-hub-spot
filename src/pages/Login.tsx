import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

export default function Login() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Welcome back!', description: 'Logged in (stub).' })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Login — Knowledge Marketplace" description="Login to your account." canonical="/login" />
      <AppBar />
      <main className="container mx-auto mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <Card className="shadow-soft h-full">
            <CardHeader><CardTitle>Welcome to Knowledge Marketplace</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">Buy and sell coaching, guides, templates and more.</CardContent>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card className="shadow-soft">
            <CardHeader><CardTitle>Login</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" variant="accent" className="w-full">Continue</Button>
                <Button type="button" variant="outline" className="w-full">Continue with Google</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
