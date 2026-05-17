import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Footer } from "@/components/shared/footer"
import { Calendar, Clock, Users, MessageSquare, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-3 md:px-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="text-base md:text-xl font-semibold">ClinicApp</span>
          </div>
          <div className="flex gap-1 md:gap-2 items-center">
            <ThemeToggle />
            {/* Desktop menu */}
            <div className="hidden sm:flex gap-1 md:gap-2">
              <Button asChild variant="ghost" size="sm" className="text-xs md:text-sm">
                <Link href="/tutorial">
                  <BookOpen className="mr-1 md:mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Tutorial</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-xs md:text-sm">
                <Link href="/auth/login">Entrar</Link>
              </Button>
              <Button asChild size="sm" className="text-xs md:text-sm">
                <Link href="/auth/sign-up">Cadastrar</Link>
              </Button>
            </div>
            {/* Mobile menu */}
            <div className="flex sm:hidden gap-1">
              <Button asChild variant="outline" size="sm" className="text-xs">
                <Link href="/auth/login">Entrar</Link>
              </Button>
              <Button asChild size="sm" className="text-xs">
                <Link href="/auth/sign-up">Cadastrar</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-20 text-center flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4 md:mb-6">
          Agendamento Clínico Simplificado
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-balance mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Conecte pacientes e clínicas de forma eficiente. Gerencie consultas, profissionais e comunicação em um só lugar.
        </p>
        <div className="flex flex-col gap-2 md:gap-3 md:flex-row md:justify-center md:items-center px-2">
          <Button asChild size="sm" className="text-xs md:size-md">
            <Link href="/auth/sign-up">Começar Agora</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="text-xs md:size-md">
            <Link href="/auth/login">Fazer Login</Link>
          </Button>
          <Button asChild size="sm" variant="secondary" className="text-xs md:size-md">
            <Link href="/tutorial">
              <BookOpen className="mr-1 md:mr-2 h-4 w-4" />
              Ver Tutorial
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-3 md:px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">Agendamento Fácil</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Pacientes podem agendar consultas nos horários disponíveis de forma rápida e intuitiva.
            </p>
          </div>

          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">Gestão de Profissionais</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Clínicas gerenciam profissionais, especialidades e disponibilidade de horários.
            </p>
          </div>

          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">Controle de Horários</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Defina expedientes, bloqueie horários para almoço ou reuniões facilmente.
            </p>
          </div>

          <div className="bg-card p-4 md:p-6 rounded-lg border shadow-sm">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">Comunicação Direta</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Troque mensagens sobre agendamentos entre pacientes e clínicas.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </div>
  )
}
