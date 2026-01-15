// app/insta/page.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFire, 
  faTrophy, 
  faShieldAlt, 
  faChevronDown, 
  faClock, 
  faBolt,
  faMedal,
  faUserGraduate,
  faTimesCircle,
  faCheckCircle,
  faSearch,
  faGraduationCap,
  faProjectDiagram,
  faRobot,
  faLaptop,
  faPlayCircle,
  faCheck,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Importa o Preloader Específico do Insta
import VslPreloaderInsta from '@/components/VslPreloaderInsta';

// --- CONFIGURAÇÃO INSTA / BIO ---
// Delay 0 pois o público do Insta já conhece a autoridade da Kyrlla
const DELAY_IN_SECONDS = 0; 

// Carregamento Lazy
const FaqSection = dynamic(() => import('@/components/FaqSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: false });
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'), { ssr: false });

export default function InstaPage() {
  const [showContent, setShowContent] = useState(false);

  // Função de Checkout Direto (Sem Pop-up)
  const handleCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/K70495535U?off=apdkfkwd&checkoutMode=10';
  };

  useEffect(() => {
    // Como o delay é 0, liberamos imediatamente
    setShowContent(true);
  }, []);

  return (
    <main className="flex flex-col min-h-screen font-sans">
      {/* Performance específica para vídeo do Insta */}
      <VslPreloaderInsta />

      {/* --- BARRA DE URGÊNCIA --- */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold uppercase tracking-wider text-[10px] sm:text-xs shadow-md animate-pulse z-50">
        <FontAwesomeIcon icon={faClock} className="mr-2" />
        Oferta Especial para Seguidores — Acesso Imediato
      </div>

      {/* --- HERO SECTION --- */}
      {/* MUDANÇA: Reduzi o padding-top (pt-10 -> pt-4) para subir o conteúdo no mobile */}
      <header className="relative bg-gradient-to-b from-white to-slate-50 pt-4 pb-20 md:pt-14 md:pb-24 overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 -z-10 select-none opacity-5">
           <Image 
            src="/img/background-hero-640.webp" 
            alt="Background Pattern"
            fill
            priority
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10">
            
            {/* MUDANÇA: Removi o Badge "Método SPQ" para ganhar espaço vertical */}

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4 md:mb-8">
              Aprenda com a <span className="text-amber-500">prova</span>, na prática.
            </h1>

            {/* --- VSL PLAYER (VERSÃO INSTA - NOVO ID) --- */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-white mb-6 relative mx-auto ring-1 ring-slate-200/50">
                {/* @ts-expect-error - Web Component do VTurb */}
                <vturb-smartplayer
                  id="vid-696778c43565f9f404c72e14"
                  style={{ display: 'block', margin: '0 auto', width: '100%', height: '100%' }}
                />
            </div>

            {/* CTA IMEDIATO (Sem delay para Insta) */}
            <div className="animate-fade-in-up flex flex-col items-center w-full">
                <button
                    onClick={handleCheckout}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg uppercase tracking-wide"
                >
                    <FontAwesomeIcon icon={faTrophy} />
                    Acesso Imediato e Vitalício
                </button>
                
                <p className="mt-3 text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-1 text-emerald-500"/> Garantia de 7 dias
                </p>
            </div>
        </div>

        {/* --- ABA/SETINHA DE TRANSIÇÃO --- */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[99%] z-20">
          <div className="bg-slate-50 w-16 h-8 rounded-b-full shadow-sm border-b border-x border-slate-100 flex items-center justify-center">
             <FontAwesomeIcon icon={faChevronDown} className="text-slate-400 text-xs animate-bounce mt-1" />
          </div>
        </div>
      </header>


      {/* --- CONTEÚDO RESTANTE --- */}
      <div className="block">
        
        <section className="bg-amber-50 py-6 text-center text-xs sm:text-sm font-bold text-amber-800 tracking-wide border-y border-amber-100/50 relative z-10">
          <div className="max-w-4xl mx-auto px-4 flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faBolt} className="text-amber-500" /> 
            <span>SEM PDF • SEM VIDEOAULA INFINITA • SEM TEORIA INÚTIL</span>
          </div>
        </section>
      </div>  

        <TestimonialsSection />
        <VideoTestimonials />

        {/* BIO MENTORA */}
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-2/5 lg:w-1/3 text-center px-4">
                <div className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                    src="/img/Kyrlla-2.webp"
                    alt="Kyrlla Pattyelly"
                    className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white"
                    width={450}
                    height={560}
                    />
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg text-sm">
                    <FontAwesomeIcon icon={faMedal} className="mr-1" /> Auditora Fiscal
                    </div>
                </div>
                </div>
                
                <div className="md:w-2/3">
                    <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-widest mb-3 bg-amber-50 px-3 py-1 rounded">
                        <FontAwesomeIcon icon={faUserGraduate} className="mr-1" /> Mentora & Criadora
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                        Meu nome é Kyrlla Pattyelly. Sou Auditora Fiscal e criei o <span className="text-amber-500">Método SPQ</span>.
                    </h2>
                    
                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                        <p>
                            Passei anos estudando do jeito errado, repetindo ciclos de reprovação e acumulando PDFs que não serviram
                            para nada — até descobrir que o que aprova não é quantidade de horas, e sim o jeito de estudar.
                        </p>
                        <p>
                            Transformei essa descoberta no SPQ, um método baseado em engenharia reversa de questões e neurociência.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-500">+5</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Anos de XP</div>
                        </div>
                        <div className="text-center border-l border-slate-100">
                            <div className="text-2xl font-bold text-amber-500">1k+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Alunos</div>
                        </div>
                        <div className="text-center border-l border-slate-100">
                            <div className="text-2xl font-bold text-amber-500">100%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Focada</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Seção Comparativa */}
        <section className="bg-slate-50 py-16">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                {/* Negativo */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-rose-400">
                    <h3 className="text-xl font-bold text-rose-500 mb-6 flex items-center gap-2">
                        <FontAwesomeIcon icon={faTimesCircle} /> O que o DAQ <span className="underline decoration-2 underline-offset-2">não</span> é
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-slate-600">
                            <FontAwesomeIcon icon={faTimesCircle} className="text-rose-300 mt-1 shrink-0" />
                            <span>Curso com 200h de aula teórica maçante.</span>
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <FontAwesomeIcon icon={faTimesCircle} className="text-rose-300 mt-1 shrink-0" />
                            <span>PDF de 800 páginas pra você tentar decorar.</span>
                        </li>
                    </ul>
                </div>

                {/* Positivo */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                    <h3 className="text-xl font-bold text-emerald-600 mb-6 flex items-center gap-2 relative z-10">
                        <FontAwesomeIcon icon={faCheckCircle} /> O que o DAQ <span className="underline decoration-2 underline-offset-2">é</span>
                    </h3>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex gap-3 text-slate-700 font-medium">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 shrink-0" />
                            <span>Foco no que realmente cai na prova.</span>
                        </li>
                        <li className="flex gap-3 text-slate-700 font-medium">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 shrink-0" />
                            <span>Adaptável à sua rotina.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Pilares */}
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">
                        <FontAwesomeIcon icon={faSearch} className="text-amber-500 mr-3" /> 
                        Pilares do Método SPQ
                    </h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                    { title: 'Análise do Edital', desc: 'Identifique o que cai de verdade (Pareto 80/20).' },
                    { title: 'Filtro de Questões', desc: 'Aprenda a selecionar apenas o ouro no TEC.' },
                    { title: 'Estudo Reverso', desc: 'A teoria vem como consequência da prática.' },
                    { title: 'Revisão Ativa', desc: 'Nunca mais esqueça o que estudou semana passada.' },
                    ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                        <span className="text-4xl font-black text-slate-200 group-hover:text-amber-500 transition-colors block mb-4">0{idx + 1}</span>
                        <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Arsenal */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-emerald-400 mr-2" /> 
                    O arsenal completo da sua aprovação
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                        <FontAwesomeIcon icon={faProjectDiagram} className="text-emerald-400 text-3xl mb-4" />
                        <h3 className="font-bold mb-2">Método SPQ</h3>
                        <p className="text-sm text-slate-300">Treinamento completo em vídeo aulas curtas.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                        <FontAwesomeIcon icon={faRobot} className="text-emerald-400 text-3xl mb-4" />
                        <h3 className="font-bold mb-2">Tutor IA 24h</h3>
                        <p className="text-sm text-slate-300">Tire dúvidas sobre o método a qualquer hora.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                        <FontAwesomeIcon icon={faLaptop} className="text-emerald-400 text-3xl mb-4" />
                        <h3 className="font-bold mb-2">Domine o TEC</h3>
                        <p className="text-sm text-slate-300">Aprenda a ferramenta + Cupom de 20% OFF.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                        <FontAwesomeIcon icon={faPlayCircle} className="text-emerald-400 text-3xl mb-4" />
                        <h3 className="font-bold mb-2">Na Prática</h3>
                        <p className="text-sm text-slate-300">Aulas na prática, mostrando a tela.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ - Método */}
        <FaqSection variant="metodo" />

        {/* CHECKOUT FINAL */}
        <section id="checkout" className="py-20 bg-emerald-50/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Card de Preço */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-500 text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Faixa Garantia */}
                        <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-1"/> 7 DIAS DE GARANTIA
                        </div>

                        <h3 className="text-2xl font-black text-slate-800 mb-2">DAQ Essencial</h3>
                        <p className="text-slate-500 text-sm mb-6">Acesso Imediato + Bônus</p>
                        
                        <div className="mb-6">
                            <p className="text-slate-400 text-sm line-through">de R$ 497,00</p>
                            <p className="text-lg text-emerald-600 font-bold">por apenas 12x de</p>
                            <p className="text-5xl font-black text-emerald-600 tracking-tight font-sans">R$ 30,72</p>
                            <p className="text-slate-500 text-sm mt-1">ou R$ 297 à vista</p>
                        </div>
                        
                        <div className="bg-emerald-50 rounded-lg p-4 mb-6 text-left space-y-2 text-sm text-slate-700">
                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> <span>Método SPQ Completo</span></div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> <span>Planilha de Gestão</span></div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> <span>Suporte Tutor IA</span></div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> <span>Cupom TEC Concursos</span></div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-lg flex items-center justify-center gap-2"
                        >
                            Quero Ser Aprovado
                            <FontAwesomeIcon icon={faTrophy} /> 
                        </button>
                    </div>

                    {/* Texto de Apoio */}
                    <div className="md:pl-4">
                        <h4 className="text-2xl font-bold text-slate-900 mb-4">Por que entrar agora?</h4>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            O tempo que você perde estudando errado é o tempo que seu concorrente usa para te ultrapassar. O DAQ não é mais um curso, é a ferramenta para <strong>acelerar</strong> seu resultado.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-amber-500">
                                    <FontAwesomeIcon icon={faShieldAlt} className="text-xl"/>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Risco Zero</h5>
                                    <p className="text-sm text-slate-500">Teste por 7 dias. Se não gostar, devolvemos tudo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ - Geral */}
        <FaqSection variant="geral" />

        <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
                <FontAwesomeIcon icon={faCopyright} className="mr-1" /> 2026 DAQ Essencial.
            </p>
            <div className="flex gap-6">
                <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-amber-500 cursor-pointer transition-colors" />
                <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-amber-500 cursor-pointer transition-colors" />
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
            </div>
        </footer>

      {/* Script do Player VTurb Específico para o INSTA */}
      <Script
        id="vturb-player-script-insta"
        src="https://scripts.converteai.net/6386c5ef-c435-4ceb-bd05-bafd8dff4a4e/players/696778c43565f9f404c72e14/v4/player.js"
        strategy="lazyOnload" 
      />
    </main>
  );
}