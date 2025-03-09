"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface ComingSoonDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  feature?: string
}

export function ComingSoonDialog({ open, onOpenChange, feature = "Esta función" }: ComingSoonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">¡Próximamente!</DialogTitle>
          <DialogDescription className="text-center">
            {feature} está actualmente en desarrollo y estará disponible pronto. ¡Gracias por tu paciencia!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Button onClick={() => onOpenChange(false)}>Entendido</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

