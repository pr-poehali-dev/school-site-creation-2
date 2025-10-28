import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/72c4fb3e-84fd-4277-9787-fcce4be4171e.jpeg" 
                alt="Ступени образования" 
                className="h-12"
              />
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О школе</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors font-medium">Преподаватели</a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">Новости</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Частная школа<br />
                <span className="text-primary">Ступени образования</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Индивидуальный подход к каждому ученику. Современные методики обучения. 
                Квалифицированные педагоги с многолетним опытом.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Узнать больше
                </Button>
                <Button size="lg" variant="outline">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/0b9225d3-88ee-4d8a-bf92-0a1ee2f666ff/files/99d38325-4d70-4139-a96f-98b418b13d94.jpg" 
                alt="Современный класс"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Качественное образование</h3>
                <p className="text-muted-foreground">
                  Программы, соответствующие государственным стандартам и превосходящие их
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Малые группы</h3>
                <p className="text-muted-foreground">
                  До 12 учеников в классе для максимального внимания каждому ребенку
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Профессионализм</h3>
                <p className="text-muted-foreground">
                  Опытные педагоги с высшей категорией и постоянным повышением квалификации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">О школе</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/0b9225d3-88ee-4d8a-bf92-0a1ee2f666ff/files/99d38325-4d70-4139-a96f-98b418b13d94.jpg" 
                alt="Учебный процесс в школе"
                className="rounded-xl w-full mb-8 shadow-md"
              />
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Частная школа «Ступени образования» — это современное образовательное учреждение, 
                где каждый ребенок получает качественные знания в комфортной и безопасной среде.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Наша миссия — помочь каждому ученику раскрыть свой потенциал и подготовить к успешному 
                будущему через индивидуальный подход и передовые методики обучения.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Индивидуальный подход</h4>
                    <p className="text-muted-foreground">Учитываем особенности каждого ребенка</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Современное оборудование</h4>
                    <p className="text-muted-foreground">Оснащенные классы и лаборатории</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Дополнительные занятия</h4>
                    <p className="text-muted-foreground">Кружки и секции по интересам</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Психологическая поддержка</h4>
                    <p className="text-muted-foreground">Штатный психолог для детей и родителей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Наши преподаватели</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/0b9225d3-88ee-4d8a-bf92-0a1ee2f666ff/files/4cd330cd-98b0-46ba-bd16-4d8358275ea5.jpg"
                  alt="Преподаватель"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Анна Петровна Смирнова</h3>
                <p className="text-primary font-medium mb-2">Учитель математики</p>
                <p className="text-muted-foreground text-sm">
                  Высшая категория, стаж 15 лет. Победитель конкурса "Учитель года"
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/0b9225d3-88ee-4d8a-bf92-0a1ee2f666ff/files/ff34c751-e55a-4bbc-bde1-dff27e9aaa34.jpg"
                  alt="Преподаватель"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Дмитрий Иванович Козлов</h3>
                <p className="text-primary font-medium mb-2">Учитель физики</p>
                <p className="text-muted-foreground text-sm">
                  Кандидат наук, стаж 12 лет. Эксперт по подготовке к олимпиадам
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/0b9225d3-88ee-4d8a-bf92-0a1ee2f666ff/files/4cd330cd-98b0-46ba-bd16-4d8358275ea5.jpg"
                  alt="Преподаватель"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Елена Сергеевна Волкова</h3>
                <p className="text-primary font-medium mb-2">Учитель английского языка</p>
                <p className="text-muted-foreground text-sm">
                  Сертификат CAE, стаж 10 лет. Обучение по Кембриджской методике
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Новости и события</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Share2" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Наша группа ВКонтакте</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Следите за новостями школы, анонсами мероприятий и достижениями учеников в нашей официальной группе ВКонтакте.
              </p>
              <div className="bg-muted rounded-lg p-12 flex flex-col items-center justify-center">
                <Icon name="ExternalLink" className="text-primary mb-4" size={48} />
                <p className="text-muted-foreground mb-4 text-center">
                  Здесь будет виджет VK с последними новостями
                </p>
                <Button variant="outline" className="gap-2">
                  <Icon name="ExternalLink" size={16} />
                  Открыть группу VK
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Контакты</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Icon name="Mail" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@stupeni-edu.ru</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h4 className="font-bold mb-3">Как добраться</h4>
                <p className="text-sm text-muted-foreground">
                  Метро «Примерная станция», выход 2. Далее пешком 7 минут или автобус №123 до остановки «Школа».
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Напишите нам</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/72c4fb3e-84fd-4277-9787-fcce4be4171e.jpeg" 
                alt="Ступени образования" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                Частная школа полного дня с индивидуальным подходом к каждому ученику
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О школе</a></li>
                <li><a href="#teachers" className="text-gray-300 hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Ступени образования. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;