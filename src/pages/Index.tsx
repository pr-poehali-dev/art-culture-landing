import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair text-xl font-semibold text-foreground">
              Александра Волкова
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#главная" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Главная</a>
              <a href="#портфолио" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Портфолио</a>
              <a href="#биография" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Биография</a>
              <a href="#достижения" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Достижения</a>
              <a href="#услуги" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Услуги</a>
              <a href="#контакты" className="text-foreground hover:text-accent-foreground transition-colors font-lato">Контакты</a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge variant="secondary" className="font-lato text-sm">
                  Куратор • Искусствовед • Организатор
                </Badge>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Александра
                  <br />
                  <span className="text-accent-foreground">Волкова</span>
                </h1>
                <p className="font-lato text-lg md:text-xl text-muted-foreground max-w-xl">
                  Профессионал в области культуры и искусства с 15-летним опытом организации выставок, культурных проектов и арт-мероприятий международного уровня.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-lato">
                  Посмотреть портфолио
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="font-lato">
                  Связаться со мной
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/img/484416d5-8949-41ff-bb53-2d9a1774ef07.jpg" 
                  alt="Культурное пространство"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="портфолио" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Портфолио
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты и выставки, которые формируют современную культурную повестку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/e96e0aa4-f1dc-4265-aa23-0d5436b02904.jpg"
                  alt="Современное искусство"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">2024</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  "Современные грани"
                </h3>
                <p className="font-lato text-muted-foreground text-sm mb-4">
                  Международная выставка современного искусства, объединившая 45 художников из 12 стран
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-lato text-sm text-accent-foreground font-medium">
                    Третьяковская галерея
                  </span>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/4beea5ea-477e-468a-a702-40e0ac63130a.jpg"
                  alt="Театральный проект"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">2023</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  "Культурные диалоги"
                </h3>
                <p className="font-lato text-muted-foreground text-sm mb-4">
                  Международный фестиваль перформанс-искусства с участием ведущих театров Европы
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-lato text-sm text-accent-foreground font-medium">
                    Большой театр
                  </span>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/484416d5-8949-41ff-bb53-2d9a1774ef07.jpg"
                  alt="Классическое искусство"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">2023</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  "Наследие веков"
                </h3>
                <p className="font-lato text-muted-foreground text-sm mb-4">
                  Ретроспективная выставка русского искусства XVIII-XIX веков
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-lato text-sm text-accent-foreground font-medium">
                    Эрмитаж
                  </span>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="биография" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Биография
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              <p className="font-lato text-lg text-foreground leading-relaxed">
                Александра Волкова — признанный эксперт в области культуры и искусства, чья карьера насчитывает более 15 лет успешной работы в сфере кураторства и организации культурных мероприятий.
              </p>
              <p className="font-lato text-lg text-foreground leading-relaxed">
                Образование получила в Московском государственном университете им. М.В. Ломоносова на факультете искусств, специализация — история и теория изобразительного искусства. Дополнительное образование прошла в Сорбонне (Париж) по программе "Международное кураторство".
              </p>
              <p className="font-lato text-lg text-foreground leading-relaxed">
                За годы работы курировала более 50 выставок, организовала 25 международных культурных проектов и является автором более 40 публикаций в ведущих искусствоведческих журналах.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Образование</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-lato font-medium">МГУ им. М.В. Ломоносова</p>
                    <p className="font-lato text-sm text-muted-foreground">Магистр искусствоведения, 2009</p>
                  </div>
                  <div>
                    <p className="font-lato font-medium">Сорбонна, Париж</p>
                    <p className="font-lato text-sm text-muted-foreground">Международное кураторство, 2012</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Языки</h3>
                <div className="space-y-2">
                  <p className="font-lato">Русский (родной)</p>
                  <p className="font-lato">Английский (C1)</p>
                  <p className="font-lato">Французский (B2)</p>
                  <p className="font-lato">Итальянский (B1)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="достижения" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Достижения
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Награды и признание профессионального сообщества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">50+</h3>
              <p className="font-lato text-muted-foreground">Кураторских проектов</p>
            </Card>

            <Card className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Globe" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">25</h3>
              <p className="font-lato text-muted-foreground">Международных проектов</p>
            </Card>

            <Card className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="BookOpen" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">40+</h3>
              <p className="font-lato text-muted-foreground">Научных публикаций</p>
            </Card>

            <Card className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Users" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">500К+</h3>
              <p className="font-lato text-muted-foreground">Посетителей выставок</p>
            </Card>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">
                      Премия "Инновации в искусстве"
                    </h3>
                    <p className="font-lato text-muted-foreground text-sm mb-2">
                      Министерство культуры РФ, 2023
                    </p>
                    <p className="font-lato text-sm">
                      За выдающийся вклад в развитие современного искусства и инновационные подходы в кураторстве
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">
                      "Куратор года"
                    </h3>
                    <p className="font-lato text-muted-foreground text-sm mb-2">
                      Ассоциация музеев России, 2022
                    </p>
                    <p className="font-lato text-sm">
                      Признание профессионального сообщества за серию выставок "Диалог культур"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Услуги
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные услуги в области культуры и искусства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Palette" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Кураторство выставок
              </h3>
              <p className="font-lato text-muted-foreground mb-6">
                Концепция, планирование и реализация выставочных проектов любого масштаба — от камерных экспозиций до международных биеннале
              </p>
              <Button variant="outline" className="w-full font-lato">
                Узнать подробнее
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Calendar" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Организация арт-мероприятий
              </h3>
              <p className="font-lato text-muted-foreground mb-6">
                Полный цикл организации культурных мероприятий: фестивали, перформансы, лекции, мастер-классы и арт-резиденции
              </p>
              <Button variant="outline" className="w-full font-lato">
                Узнать подробнее
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="BookOpen" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Консалтинг и экспертиза
              </h3>
              <p className="font-lato text-muted-foreground mb-6">
                Экспертная оценка произведений искусства, консультации по формированию коллекций и культурная стратегия
              </p>
              <Button variant="outline" className="w-full font-lato">
                Узнать подробнее
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Контакты
            </h2>
            <p className="font-lato text-lg text-muted-foreground">
              Готова обсудить ваш проект и воплотить культурные идеи в жизнь
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Email</h3>
                  <p className="font-lato text-muted-foreground">a.volkova@cultureart.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Телефон</h3>
                  <p className="font-lato text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-2">Местоположение</h3>
                  <p className="font-lato text-muted-foreground">Москва, Россия</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-playfair text-lg font-semibold mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Facebook" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8 animate-fade-in">
              <h3 className="font-playfair text-xl font-semibold mb-6">Отправить сообщение</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-lato text-sm font-medium mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-lato"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="font-lato text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-lato"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-lato text-sm font-medium mb-2 block">Тема</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-lato"
                    placeholder="Тема сообщения"
                  />
                </div>
                <div>
                  <label className="font-lato text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-lato"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full font-lato">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Александра Волкова
            </div>
            <p className="font-lato text-muted-foreground mb-6">
              Профессионал в области культуры и искусства
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#главная" className="font-lato text-sm text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#портфолио" className="font-lato text-sm text-muted-foreground hover:text-foreground transition-colors">Портфолио</a>
              <a href="#биография" className="font-lato text-sm text-muted-foreground hover:text-foreground transition-colors">Биография</a>
              <a href="#услуги" className="font-lato text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#контакты" className="font-lato text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Separator className="my-6" />
            <p className="font-lato text-xs text-muted-foreground">
              © 2024 Александра Волкова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}