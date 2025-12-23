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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Печатный цех 21
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary">
              🎨 Создаем мерч с 2021 года
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Брендируем вашу реальность
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Печать на одежде, мерч под ключ, корпоративное брендирование. 
              От идеи до готового изделия за 5 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Заказать мерч
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="animate-slide-up">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Проектов</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-secondary">24ч</div>
                <div className="text-muted-foreground">Срочный заказ</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-accent">10K+</div>
                <div className="text-muted-foreground">Изделий</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл производства мерча</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог изделий</h2>
            <p className="text-xl text-muted-foreground mb-8">Выберите категорию</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className={activeFilter === 'all' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                Все изделия
              </Button>
              <Button
                variant={activeFilter === 'tshirts' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('tshirts')}
                className={activeFilter === 'tshirts' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                Футболки
              </Button>
              <Button
                variant={activeFilter === 'sweatshirts' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('sweatshirts')}
                className={activeFilter === 'sweatshirts' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                Свитшоты и худи
              </Button>
              <Button
                variant={activeFilter === 'caps' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('caps')}
                className={activeFilter === 'caps' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                Кепки
              </Button>
              <Button
                variant={activeFilter === 'bags' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('bags')}
                className={activeFilter === 'bags' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                Шоперы
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 animate-scale-in"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl">
                  {item.image}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на частые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-2 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и мы свяжемся с вами</p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="border-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="border-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" className="border-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="border-2" />
                </div>
                <Button className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl border-2">
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-semibold">Телефон</div>
              <div className="text-muted-foreground">+7 (999) 123-45-67</div>
            </div>
            <div className="p-6 bg-white rounded-xl border-2">
              <Icon name="Mail" className="mx-auto mb-3 text-secondary" size={32} />
              <div className="font-semibold">Email</div>
              <div className="text-muted-foreground">info@print21.ru</div>
            </div>
            <div className="p-6 bg-white rounded-xl border-2">
              <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
              <div className="font-semibold">Адрес</div>
              <div className="text-muted-foreground">Москва, ул. Примерная 21</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Печатный цех 21. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
