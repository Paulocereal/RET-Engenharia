import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Substituí o número de exemplo pelo seu número real:
  const phone = "553191979264"; 
  const message = encodeURIComponent("Olá! Gostaria de fazer um orçamento com a RET-Engenharia.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
