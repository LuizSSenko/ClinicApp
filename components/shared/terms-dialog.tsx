"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import { X } from "lucide-react"

interface TermsDialogProps {
  open: boolean
  onAccept: () => void
  onReject: () => void
}

export function TermsDialog({ open, onAccept, onReject }: TermsDialogProps) {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHasScrolledToEnd(false)
  }, [open])

  const handleScroll = () => {
    if (!contentRef.current) return
    const element = contentRef.current
    const isAtEnd = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 5
    setHasScrolledToEnd(isAtEnd)
  }

  return (
    <Dialog open={open} onOpenChange={onReject}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col p-6 gap-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <DialogTitle>Termos de Uso e Condições</DialogTitle>
            <DialogDescription>
              Leia atentamente e role até o final para aceitar
            </DialogDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onReject}
            className="h-6 w-6 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto text-sm text-muted-foreground leading-relaxed pr-4 space-y-6"
        >
          <div>
            <h3 className="font-semibold text-foreground mb-2">1. Descrição do Serviço</h3>
            <p>
              ClinicApp é uma plataforma de agendamento de consultas clínicas que conecta pacientes, profissionais de saúde e clínicas.
              O serviço permite o gerenciamento de agendamentos, comunicação entre pacientes e profissionais, e emissão de registros médicos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">2. Elegibilidade</h3>
            <p>
              Você deve ter pelo menos 18 anos de idade para utilizar esta plataforma. Se estiver cadastrando uma clínica,
              você declara estar autorizado a agir em nome da mesma. Ao criar uma conta, você garante que todas as informações
              fornecidas são precisas e completas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">3. Responsabilidades do Usuário</h3>
            <p className="mb-3">Como usuário, você é responsável por:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Manter a confidencialidade de sua senha e informações de acesso</li>
              <li>Fornecer informações precisas e mantê-las atualizadas</li>
              <li>Não compartilhar sua conta com terceiros</li>
              <li>Utilizar a plataforma de forma legal e ética</li>
              <li>Não tentar contornar medidas de segurança ou acessar dados não autorizados</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">4. Limitação de Responsabilidade</h3>
            <p>
              A ClinicApp é fornecida "no estado em que se encontra". Não garantimos que o serviço será ininterrupto,
              seguro ou livre de erros. Você utiliza a plataforma por sua conta e risco. Não nos responsabilizamos por
              danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou incapacidade de usar o serviço.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">5. Confidencialidade de Dados Médicos</h3>
            <p>
              Os dados médicos e informações de saúde são tratados com rigor de conformidade legal. Todos os profissionais
              e clínicas que utilizam nossa plataforma se comprometem a cumprir regulamentações de proteção de dados de saúde,
              incluindo a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">6. Proibições</h3>
            <p className="mb-3">Você concorda em não:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Violar qualquer lei local, estadual, nacional ou internacional</li>
              <li>Enviar spam, vírus ou conteúdo malicioso</li>
              <li>Prejudicar ou danificar a plataforma ou infraestrutura</li>
              <li>Usar a plataforma para prejudicar, assediar ou enganar outros usuários</li>
              <li>Tentar obter acesso não autorizado a contas ou dados</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">7. Cancelamento e Encerramento</h3>
            <p>
              Você pode cancelar sua conta a qualquer momento. Também nos reservamos o direito de encerrar contas que
              violem estes termos. Após o encerramento, seus dados serão tratados conforme a política de privacidade.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">8. Modificações dos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As mudanças entram em vigor assim que
              publicadas. Seu uso continuado da plataforma após as mudanças constitui aceitação dos novos termos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">9. Lei Aplicável</h3>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida
              nos tribunais competentes da jurisdição aplicável.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">10. Contato</h3>
            <p>
              Para dúvidas sobre estes termos ou nossa plataforma, entre em contato através das informações disponíveis
              no site. Data da última atualização: May 17, 2026.
            </p>
          </div>

          <div className="border-t pt-6 mt-6">
            <p className="text-xs">
              Ao criar uma conta, você confirma que leu, entendeu e concorda integralmente com estes Termos de Uso e com a{" "}
              <Link href="/aviso-legal" target="_blank" className="text-primary hover:underline font-semibold">
                Política de Privacidade
              </Link>
              {" "}da plataforma ClinicApp.
            </p>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 flex gap-3 justify-end">
          <Button variant="outline" onClick={onReject}>
            Recusar
          </Button>
          <Button onClick={onAccept} disabled={!hasScrolledToEnd}>
            {hasScrolledToEnd ? "Li e Aceito os Termos" : "Role até o final"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
