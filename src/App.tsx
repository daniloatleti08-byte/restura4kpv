import { useState } from 'react';
import { Check, ChevronDown, CheckCircle2, MessageCircle } from 'lucide-react';

export default function App() {
  const [checks, setChecks] = useState([false, false]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCheck = (index: number) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allChecked = checks.every(Boolean);

  const checklistItems = [
    "Tenho uma foto antiga que quero restaurar",
    "Estou pronto para enviar a foto hoje"
  ];

  const faqs = [
    {
      q: "Quanto tempo leva?",
      a: "Geralmente, entregamos a prévia da sua foto restaurada em até 2 horas úteis após o envio. Nosso foco é oferecer um resultado profissional no menor tempo possível."
    },
    {
      q: "Como envio minha foto?",
      a: "Você pode nos enviar o arquivo digital diretamente pelo WhatsApp. Caso tenha a foto apenas revelada em papel, basta tirar uma foto dela com o seu celular (em um local bem iluminado) e nos enviar."
    },
    {
      q: "O resultado é garantido?",
      a: "Sim. Acreditamos tanto no nosso trabalho que você recebe uma prévia com marca d'água primeiro. Só avançamos com o serviço se você aprovar a qualidade da restauração."
    },
    {
      q: "Quais tipos de foto vocês restauram?",
      a: "Tratamos fotos amareladas pelo tempo, imagens desbotadas, riscadas, com marcas de dobra ou até pequenos rasgos e manchas. A inteligência artificial mapeia os defeitos e reconstrói as áreas danificadas."
    },
    {
      q: "Como funciona o pagamento?",
      a: "O pagamento é feito via PIX, apenas após o atendimento e confirmação de que conseguiremos restaurar a sua imagem com padrão de excelência."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans selection:bg-[#C9A84C] selection:text-[#0A0A0A] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none"></div>
        <div className="z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#C9A84C] leading-tight drop-shadow-sm">
            Sua foto antiga pode estar irreconhecível. A gente muda isso.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Restauramos fotos desbotadas, rasgadas e antigas com inteligência artificial. Resultado profissional em minutos.
          </p>
          <div className="pt-8">
            <div className="inline-block bg-black/40 border border-gray-800 rounded-full px-5 py-2">
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                ⚠️ Atendemos apenas quem tem foto para restaurar agora. Se você está apenas curioso, esta página não é para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="py-20 bg-[#121212] border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://ui-avatars.com/api/?name=Carlos+Roberto&background=C9A84C&color=0A0A0A" alt="Carlos Roberto" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-white">Carlos Roberto</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                "Restaurei a única foto que tinha do meu avô. O resultado ficou incrível, consegui ver detalhes do rosto dele que o tempo tinha apagado completamente. Emocionante!"
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://ui-avatars.com/api/?name=Maria+Alice&background=C9A84C&color=0A0A0A" alt="Maria Alice" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-white">Maria Alice</h4>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                "A foto do casamento dos meus pais estava amarelada e com marcas de dobra. A equipe do Restaura 4K devolveu a cor e a vida para essa lembrança tão especial."
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/20">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://ui-avatars.com/api/?name=Joao+Pedro&background=C9A84C&color=0A0A0A" alt="João Pedro" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-white">João Pedro</h4>
                  <p className="text-sm text-gray-500">Curitiba, PR</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                "Trabalho excelente. Enviei uma foto da minha infância que estava manchada e o arquivo digital parece que foi tirado de uma câmera moderna hoje. Muito profissional."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Before & After simulated slider */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Veja a diferença que fazemos</h2>
          
          <div className="flex flex-col md:flex-row h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-[#C9A84C]/5">
            {/* Antes (Ruído/Antiga) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#2a2a2a] relative overflow-hidden flex items-center justify-center">
              <img 
                src="/images (3).jpeg" 
                alt="Foto Antiga Original" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <div className="z-10 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-sm font-medium text-white tracking-wide uppercase">Antes (Com desgaste)</span>
              </div>
            </div>

            {/* Depois (Clara/Restaurada) */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-gray-300 to-gray-500 relative flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-800 overflow-hidden">
              <img 
                src="/FOTO 1.png" 
                alt="Foto Restaurada com IA" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-black/10 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-bold text-gray-900 tracking-wide uppercase">Depois (Restaura 4K)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Lead Qualification & 5. WhatsApp Button */}
      <section className="py-24 bg-[#121212] border-y border-gray-800/50 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#C9A84C]">Antes de entrar em contato, confirme:</h2>
            
            <div className="space-y-4 mb-10">
              {checklistItems.map((item, index) => (
                <label 
                  key={index} 
                  className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 border
                    ${checks[index] ? 'bg-[#1A1A1A] border-[#C9A84C]/50' : 'bg-[#141414] border-transparent hover:border-gray-700'}`}
                >
                  <div className="mt-0.5">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors
                      ${checks[index] ? 'bg-[#C9A84C] border-[#C9A84C]' : 'bg-transparent border-gray-600'}`}>
                      {checks[index] && <Check className="w-4 h-4 text-[#0A0A0A] font-bold" />}
                    </div>
                    {/* Hidden input for accessibility if needed, though label works nicely */}
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={checks[index]}
                      onChange={() => handleCheck(index)}
                    />
                  </div>
                  <span className={`text-base md:text-lg select-none ${checks[index] ? 'text-white' : 'text-gray-400'}`}>
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center">
              {allChecked ? (
                <a 
                  href="https://wa.me/5511965125105?text=vim%20do%20site%20e%20quero%20restaurar%20minhas%20memorias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quero restaurar minha foto agora
                </a>
              ) : (
                <div className="w-full md:w-auto flex flex-col items-center">
                  <button 
                    disabled 
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-gray-800 text-gray-500 px-8 py-5 rounded-2xl font-semibold text-lg md:text-xl cursor-not-allowed border border-gray-700"
                  >
                    Marque todos os itens acima para continuar
                  </button>
                  <p className="text-gray-600 text-sm mt-4 text-center">
                    Precisamos desta confirmação para garantir a qualidade do nosso atendimento.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-400">Tudo o que você precisa saber sobre o nosso serviço.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#141414] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1A1A1A] transition-colors"
                >
                  <h3 className="font-semibold text-lg text-gray-100 pr-8">{faq.q}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                    ${openFaq === index ? 'max-h-48 py-5 border-t border-gray-800/50' : 'max-h-0 py-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 px-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Restaura 4K. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}

