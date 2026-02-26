/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, UtensilsCrossed, Star, X, Calendar, Users } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warm-white selection:bg-olive selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-olive-dark">
            Sabor da Vovó
          </div>
          <div className="hidden md:flex gap-8 text-stone-600 font-medium text-sm tracking-wide uppercase">
            <a href="#home" className="hover:text-olive transition-colors">Início</a>
            <a href="#about" className="hover:text-olive transition-colors">Sobre</a>
            <a href="#menu" className="hover:text-olive transition-colors">Cardápio</a>
            <a href="#location" className="hover:text-olive transition-colors">Localização</a>
          </div>
          <button 
            onClick={() => setIsReservationOpen(true)}
            className="bg-olive hover:bg-olive-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300"
          >
            Reservar
          </button>
        </div>
      </nav>

      {/* Reservation Modal */}
      <AnimatePresence>
        {isReservationOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReservationOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsReservationOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-500" />
              </button>
              
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl text-stone-800 mb-2">Faça sua Reserva</h3>
                <p className="text-stone-500 text-sm">Garanta seu lugar na mesa da vovó.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Reserva solicitada com sucesso!'); setIsReservationOpen(false); }}>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Nome</label>
                  <input type="text" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all" placeholder="Seu nome completo" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Data</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input type="date" required className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Pessoas</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <select className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all appearance-none">
                        <option>2 pessoas</option>
                        <option>3 pessoas</option>
                        <option>4 pessoas</option>
                        <option>5+ pessoas</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Telefone</label>
                  <input type="tel" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all" placeholder="11 2208-1559" />
                </div>

                <button type="submit" className="w-full bg-olive hover:bg-olive-dark text-white font-medium py-4 rounded-xl mt-4 transition-colors shadow-lg shadow-olive/20">
                  Confirmar Reserva
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070&auto=format&fit=crop" 
            alt="Rustic Brazilian Food" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-transparent to-warm-white"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-olive/30 rounded-full text-olive text-xs font-bold tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm">
              Culinária Afetiva
            </span>
            <h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-6 leading-[0.9]">
              O verdadeiro <br/>
              <span className="italic text-olive">sabor de casa</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Resgatamos as receitas tradicionais da família para trazer à sua mesa o conforto e o carinho da comida de vó.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#menu" className="bg-olive text-white px-8 py-4 rounded-full font-medium hover:bg-olive-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-olive/20">
                Ver Cardápio
              </a>
              <a href="#location" className="bg-white text-olive border border-olive/20 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all">
                Como Chegar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <UtensilsCrossed className="w-6 h-6" />,
              title: "Ingredientes Frescos",
              desc: "Selecionamos os melhores produtos locais, como a vovó fazia na feira."
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: "Receitas de Família",
              desc: "Segredos culinários passados de geração em geração, preparados com amor."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Tempo de Preparo",
              desc: "Aqui a comida não tem pressa. Cozinhamos lentamente para apurar o sabor."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center p-8 rounded-3xl bg-warm-white hover:bg-stone-100 transition-colors"
            >
              <div className="w-12 h-12 bg-olive/10 text-olive rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section with Image Grid */}
      <section id="about" className="py-24 px-6 bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
                alt="Cooking pot" 
                className="rounded-3xl w-full h-64 object-cover mt-12 shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
                alt="Plating food" 
                className="rounded-3xl w-full h-64 object-cover shadow-xl"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-200/50 rounded-full blur-3xl"></div>
          </div>
          
          <div>
            <span className="text-olive font-bold tracking-widest uppercase text-xs mb-2 block">Nossa História</span>
            <h2 className="font-serif text-5xl text-stone-900 mb-8">Tradição que aquece o coração</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              <p>
                O Restaurante Sabor da Vovó nasceu do desejo de manter viva a memória dos almoços de domingo. 
                Aquele cheiro de feijão fresco, o barulho da panela de pressão e a alegria da família reunida ao redor da mesa.
              </p>
              <p>
                Nossa cozinha é simples, honesta e cheia de afeto. Não usamos atalhos. O tempero é caseiro, 
                socado no pilão na hora, e cada prato é servido com a generosidade que a vovó ensinou.
              </p>
              <p>
                Venha nos visitar e sinta-se em casa. Aqui, você não é apenas um cliente, é parte da nossa família.
              </p>
            </div>
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Assinatura_de_Machado_de_Assis.jpg/800px-Assinatura_de_Machado_de_Assis.jpg" 
                alt="Signature" 
                className="h-12 opacity-60 mix-blend-multiply" 
              />
              <p className="text-sm text-stone-500 mt-2">Família Sabor da Vovó</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 px-6 bg-stone-900 text-warm-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-5xl mb-4 text-white">Nossos Clássicos</h2>
          <p className="text-stone-400">Pratos feitos com ingredientes selecionados e muito amor.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            { 
              name: "Feijoada Completa", 
              price: "R$ 45,00", 
              desc: "Acompanha arroz, couve, farofa, torresmo e laranja. Servida às quartas e sábados.",
              image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=800&auto=format&fit=crop"
            },
            { 
              name: "Picadinho da Vovó", 
              price: "R$ 38,00", 
              desc: "Cubos de carne macia ao molho, arroz, feijão, ovo frito e banana à milanesa.",
              image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop"
            },
            { 
              name: "Frango com Quiabo", 
              price: "R$ 35,00", 
              desc: "O clássico mineiro, servido com angu de milho verde e arroz soltinho.",
              image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop"
            },
            { 
              name: "Bife Acebolado", 
              price: "R$ 32,00", 
              desc: "Contra-filé grelhado com muita cebola caramelizada, arroz, feijão e fritas caseiras.",
              image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"
            },
            { 
              name: "Virado à Paulista", 
              price: "R$ 42,00", 
              desc: "Tutu de feijão, bisteca, ovo frito, couve, linguiça e banana frita.",
              image: "https://images.unsplash.com/photo-1626776876729-bab430945c5f?q=80&w=800&auto=format&fit=crop"
            },
            { 
              name: "Pudim de Leite", 
              price: "R$ 12,00", 
              desc: "A sobremesa mais amada, sem furinhos e com muita calda de caramelo.",
              image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop"
            },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer flex gap-4 items-start">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-2 border-b border-stone-800 pb-2 group-hover:border-olive transition-colors">
                  <h3 className="font-serif text-2xl text-stone-200 group-hover:text-olive transition-colors">{item.name}</h3>
                  <span className="font-mono text-olive text-lg">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-stone-900 transition-colors">
            Ver Cardápio Completo
          </button>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-0 bg-warm-white">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-olive text-white">
            <h2 className="font-serif text-5xl mb-12">Venha nos visitar</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 mt-1 text-stone-300" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Endereço</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Rua da Vovó, 123<br />
                    Jardim das Flores, São Paulo - SP<br />
                    CEP 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Clock className="w-6 h-6 mt-1 text-stone-300" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Horário</h3>
                  <p className="text-stone-300">Segunda a Sexta: 11h30 às 15h00</p>
                  <p className="text-stone-300">Sábado e Domingo: 12h00 às 16h00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="w-6 h-6 mt-1 text-stone-300" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Contato</h3>
                  <p className="text-stone-300">11 2208-1559</p>
                  <p className="text-stone-300">contato@sabordavovo.com.br</p>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <a href="https://www.instagram.com/andorinhahipercenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-olive transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-olive transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[400px] bg-stone-200 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.625396996653!2d-46.65269298447668!3d-23.47142408472758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef70b5e6178d3%3A0x5e73dd20d1c5f8ef!2sRestaurante%20Sabor%20da%20Vov%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1645555555555!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-500 py-12 px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Restaurante Sabor da Vovó. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com carinho.</p>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/551122081559" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 fill-current stroke-none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium ml-0 group-hover:ml-2">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}

