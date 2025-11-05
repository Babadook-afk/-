class Router {
    constructor() {
        this.routes = {
            'home': this.homePage,
            'about': this.aboutPage,
            'services': this.servicesPage,
            'portfolio': this.portfolioPage,
            'contact': this.contactPage
        };
        this.init();
    }

    init() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                this.navigateTo(page);
                this.toggleMobileMenu();
            });
        });

        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        this.navigateTo('home');
    }

    toggleMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    navigateTo(page) {
        if (this.routes[page]) {
            this.routes[page].call(this);
            this.updateActiveLink(page);
            window.scrollTo(0, 0);
        }
    }

    updateActiveLink(activePage) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === activePage) {
                link.classList.add('active');
            }
        });
    }

    homePage() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="page">
                <div class="hero">
                    <h1>Добро пожаловать на наш сайт</h1>
                    <p>Мы создаем поигрульки</p>
                    <button class="btn" style="margin-top: 2rem;" onclick="router.navigateTo('about')">Узнать больше</button>
                </div>
                
                <div class="content-grid">
                    <div class="card">
                        <h3>Качество</h3>
                        <p>Мы гарантируем высочайшее качество всех наших продуктов и услуг</p>
                    </div>
                    <div class="card">
                        <h3>Инновации</h3>
                        <p>Постоянно внедряем новые технологии и методики работы</p>
                    </div>
                    <div class="card">
                        <h3>Поддержка</h3>
                        <p>Поддержки нет</p>
                    </div>
                </div>
            </div>
        `;
    }

    aboutPage() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="page">
                <h1>О нашей компашке</h1>
                <div class="card" style="margin: 2rem 0;">
                    <p>я хз че тут писать.</p>
                </div>
                
                <h2>Наша команда</h2>
                <div class="content-grid">
                    <div class="card service-item">
                        <div class="service-icon">👨‍💼</div>
                        <h3>Орлов Влад</h3>
                        <p>Генеральный директор</p>
                        <p>Опыт работы: 3 лет</p>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">👩‍💻</div>
                        <h3>Свят Петров</h3>
                        <p>Технический директор</p>
                        <p>Опыт работы: 5 лет</p>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">👨‍🎨</div>
                        <h3>Роман Беляев</h3>
                        <p>Главный дизайнер</p>
                        <p>Опыт работы: 4 лет</p>
                    </div>
                </div>
            </div>
        `;
    }

    servicesPage() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="page">
                <h1>Наши услуги</h1>
                <p style="text-align: center; margin-bottom: 2rem;">Мы предлагаем широкий спектр услуг для развития вашего бизнеса</p>
                
                <div class="content-grid">
                    <div class="card service-item">
                        <div class="service-icon">💻</div>
                        <h3>Веб-разработка</h3>
                        <p>Создание современных веб-приложений и сайтов</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">📱</div>
                        <h3>Мобильные приложения</h3>
                        <p>Разработка нативных и мобильных приложений</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">🎨</div>
                        <h3>UI/UX дизайн</h3>
                        <p>Создание интуитивно понятных и красивых интерфейсов</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">☁️</div>
                        <h3>Облачные решения</h3>
                        <p>Развертывание и поддержка облачной инфраструктуры</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">🔍</div>
                        <h3>SEO оптимизация</h3>
                        <p>Повышение видимости вашего сайта в поисковых системах</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                    <div class="card service-item">
                        <div class="service-icon">📊</div>
                        <h3>Аналитика</h3>
                        <p>Глубокий анализ данных для принятия бизнес-решений</p>
                        <button class="btn" style="margin-top: 1rem;">Подробнее</button>
                    </div>
                </div>
            </div>
        `;
    }

    portfolioPage() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="page">
                <h1>Наши работы</h1>
                <p style="text-align: center; margin-bottom: 2rem;">Примеры реализованных проектов</p>
                
                <div class="content-grid">
                    <div class="card portfolio-item">
                        <div class="portfolio-icon">🛒</div>
                        <h3>Интернет-магазин</h3>
                        <p>Полнофункциональный интернет-магазин с системой управления заказами</p>
                        <div style="margin-top: 1rem;">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                    <div class="card portfolio-item">
                        <div class="portfolio-icon">📊</div>
                        <h3>Система аналитики</h3>
                        <p>Панель управления с аналитикой в реальном времени</p>
                        <div style="margin-top: 1rem;">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">PostgreSQL</span>
                        </div>
                    </div>
                    <div class="card portfolio-item">
                        <div class="portfolio-icon">📱</div>
                        <h3>Мобильное приложение</h3>
                        <p>Кроссплатформенное приложение для доставки еды</p>
                        <div style="margin-top: 1rem;">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    contactPage() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="page">
                <h1>Свяжитесь с нами</h1>
                
                <div class="content-grid">
                    <div class="card">
                        <h3>Контактная информация</h3>
                        <div style="margin-top: 1rem;">
                            <p><strong> Телефон:</strong> +7 (999) 123-45-67</p>
                            <p><strong> Email:</strong> 12345@gmail.com</p>
                            <p><strong> Адрес:</strong> Московская область. г.Сергиев Посад. Московское ш., 22А</p>
                            <p><strong> Часы работы:</strong> Пн-Сб: 9:00-17:30</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3>Форма обратной связи</h3>
                        <form class="contact-form" onsubmit="handleFormSubmit(event)">
                            <div class="form-group">
                                <label for="name">Имя:</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Тема:</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Сообщение:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" class="btn">Отправить сообщение</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    event.target.reset();
}

const style = document.createElement('style');
style.textContent = `
    .tech-tag {
        display: inline-block;
        background: #667eea;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        margin: 0.25rem;
    }
`;
document.head.appendChild(style);

const router = new Router();