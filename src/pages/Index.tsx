import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Футболки',
      category: 'tshirts',
      description: 'Хлопковые футболки с любым принтом',
      price: 'от 500₽',
      image: '🎨',
    },
    {
      id: 2,
      name: 'Свитшоты',
      category: 'sweatshirts',
      description: 'Теплые свитшоты с вышивкой',
      price: 'от 1200₽',
      image: '👕',
    },
    {
      id: 3,
      name: 'Худи',
      category: 'sweatshirts',
      description: 'Худи с капюшоном, качественная печать',
      price: 'от 1500₽',
      image: '🧥',
    },
    {
      id: 4,
      name: 'Бейсболки',
      category: 'caps',
      description: 'Кепки с вашим логотипом',
      price: 'от 400₽',
      image: '🧢',
    },
    {
      id: 5,
      name: 'Шоперы',
      category: 'bags',
      description: 'Экосумки с уникальным дизайном',
      price: 'от 300₽',
      image: '🛍️',
    },
    {
      id: 6,
      name: 'Поло',
      category: 'tshirts',
      description: 'Стильные поло для команды',
      price: 'от 800₽',
      image: '👔',
    },
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Брендирование',
      description: 'Разработка дизайна и нанесение логотипа на любые изделия',
    },
    {
      icon: 'Shirt',
      title: 'Печать на одежде',
      description: 'Шелкография, DTF-печать, термотрансфер, вышивка',
    },
    {
      icon: 'Package',
      title: 'Корпоративный мерч',
      description: 'Создание фирменной продукции для вашей компании',
    },
    {
      icon: 'Sparkles',
      title: 'Дизайн под ключ',
      description: 'Индивидуальная разработка макетов от наших дизайнеров',
    },
  ];

  const portfolio = [
    { title: 'Корпоративные футболки IT-компании', image: '💼' },
    { title: 'Мерч для музыкального фестиваля', image: '🎵' },
    { title: 'Форма для спортивной команды', image: '⚽' },
    { title: 'Брендированные шоперы кофейни', image: '☕' },
  ];

  const faqs = [
    {
      question: 'Какой минимальный тираж для заказа?',
      answer: 'Мы работаем с заказами от 1 штуки! Для корпоративных заказов предоставляем скидки от 50 единиц.',
    },
    {
      question: 'Сколько времени занимает производство?',
      answer: 'Стандартный срок производства 5-7 рабочих дней. Есть возможность срочного производства за 2-3 дня.',
    },
    {
      question: 'Какие способы печати вы используете?',
      answer: 'Мы используем шелкографию, DTF-печать, термотрансфер и вышивку. Подберем оптимальный способ под ваш заказ.',
    },
    {
      question: 'Можно ли заказать свой дизайн?',
      answer: 'Конечно! Вы можете предоставить готовый макет или заказать разработку дизайна у наших дизайнеров.',
    },
    {
      question: 'Как рассчитать стоимость заказа?',
      answer: 'Стоимость зависит от тиража, типа изделия и способа нанесения. Свяжитесь с нами для точного расчета.',
    },
  ];

  const filteredProducts = products.filter(
    (product) => activeFilter === 'all' || product.category === activeFilter
  );

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/Лого ПЦ21.png" 
                alt="Печатный цех 21" 
                className="h-14 w-auto"
              />
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
              <Icon name="Phone" className="mr-2" size={16} />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <Badge className="mb-8 text-sm px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
              С 2021 года
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight">
              Брендируем вашу<br />реальность
            </h1>
            <div className="text-xl md:text-2xl font-medium text-primary mb-8">
              успех в каждом оттиске
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Печать на одежде, мерч под ключ, корпоративное брендирование. 
              От идеи до готового изделия за 5 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90 shadow-sm">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Заказать мерч
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-gray-300 hover:bg-gray-50">
                <Icon name="Download" className="mr-2" size={18} />
                Скачать каталог
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="animate-slide-up">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">24ч</div>
                <div className="text-sm text-muted-foreground">Срочный заказ</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Изделий</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный цикл производства мерча</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-200 border border-gray-200 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Каталог изделий</h2>
            <p className="text-lg text-muted-foreground mb-8">Выберите категорию</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className={activeFilter === 'all' ? 'bg-primary' : 'border-gray-300 hover:bg-gray-100'}
              >
                Все изделия
              </Button>
              <Button
                variant={activeFilter === 'tshirts' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('tshirts')}
                className={activeFilter === 'tshirts' ? 'bg-primary' : 'border-gray-300 hover:bg-gray-100'}
              >
                Футболки
              </Button>
              <Button
                variant={activeFilter === 'sweatshirts' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('sweatshirts')}
                className={activeFilter === 'sweatshirts' ? 'bg-primary' : 'border-gray-300 hover:bg-gray-100'}
              >
                Свитшоты и худи
              </Button>
              <Button
                variant={activeFilter === 'caps' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('caps')}
                className={activeFilter === 'caps' ? 'bg-primary' : 'border-gray-300 hover:bg-gray-100'}
              >
                Кепки
              </Button>
              <Button
                variant={activeFilter === 'bags' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('bags')}
                className={activeFilter === 'bags' ? 'bg-primary' : 'border-gray-300 hover:bg-gray-100'}
              >
                Шоперы
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200 animate-scale-in group"
              >
                <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-7xl border-b border-gray-200">
                  {product.image}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 h-9 px-4">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-200 overflow-hidden animate-scale-in border border-gray-200 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-6xl border-b border-gray-200">
                  {item.image}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium text-center text-foreground">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">Ответы на частые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg px-6 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-base font-medium hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Оставьте заявку и мы свяжемся с вами</p>
          </div>
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="h-11 border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="h-11 border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="example@mail.ru" className="h-11 border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} className="border-gray-300" />
                </div>
                <Button className="w-full text-base h-12 bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={24} />
              <div className="text-sm font-medium mb-1 text-foreground">Телефон</div>
              <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={24} />
              <div className="text-sm font-medium mb-1 text-foreground">Email</div>
              <div className="text-sm text-muted-foreground">info@print21.ru</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={24} />
              <div className="text-sm font-medium mb-1 text-foreground">Адрес</div>
              <div className="text-sm text-muted-foreground">Москва, ул. Примерная 21</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 Печатный цех 21. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;