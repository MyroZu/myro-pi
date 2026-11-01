'use strict';
const missions = [
  {id:1, title:'Привіт, Python!', short:'Запускаю першу програму та знайомлюся з терміналом.', group:'start', time:'15–20 хв', concept:'Команда → результат', ref:'Розділ 0 · підготовка', page:15, folder:'00.0.0_Hello', file:'Hello.py', parts:['MacBook Neo','Raspberry Pi','SSH'], goal:'Побачити повідомлення від своєї першої Python-програми на Raspberry Pi.', why:'Навчуся запускати код, бачити результат і не боятися термінала. Це вхід до всіх наступних винаходів.', steps:['Разом із дорослим відкрий Термінал на MacBook Neo та підключися командою ssh pi.','Попроси дорослого перенести папку Hello з архіву на Raspberry Pi. Перейди в цю папку в терміналі Pi.','Запусти python3 Hello.py. Знайди виведене повідомлення.','Відкрий Hello.py, зміни лише текст у лапках на «Привіт, я Мирослав!» та запусти ще раз.','Поясни: текст я редагую сам, а Python виконує мою команду на Raspberry Pi.'], question:'Де виконується команда python3 Hello.py після підключення через SSH?', answers:['На Raspberry Pi','На сайті в браузері','Усередині світлодіода'], correct:0, explain:'Так! SSH відкриває термінал Raspberry Pi, тож команда виконується на платі.', caution:'У цій місії проводи не потрібні. Команди вводимо після перевірки дорослим.'},
  {id:2, title:'Мій перший миготливий LED', short:'Перетворюю кілька рядків коду на справжнє світло.', group:'start', time:'20–30 хв', concept:'Вихід і цикл', ref:'Проєкт 1.1 · Blink', page:23, circuit:27, folder:'01.1.1_Blink', file:'Blink.py', parts:['LED','Резистор 220 Ω','Макетна плата','Дроти','GPIO-розширювач'], goal:'Світлодіод вмикається на секунду й вимикається на секунду.', why:'Це найпростіший зв’язок між програмою та реальним світом. Замість здогадок я бачу результат.', steps:['З дорослим розглянь схему проєкту 1.1 у посібнику. Знайди LED, резистор 220 Ω і GPIO17.','Після коректного вимкнення Pi від’єднайте живлення. Зберіть схему за малюнком; LED має полярність.','Дорослий перевіряє проводи, резистор та орієнтацію GPIO-шлейфа. Лише після цього увімкніть Pi.','У терміналі Pi відкрий папку Blink та запусти python3 Blink.py. Поспостерігай за світлом.','Зупини програму Ctrl+C. Зміни обидві паузи sleep(1) на sleep(0.5) і запусти знову. Спочатку передбач, що зміниться.'], question:'Що станеться, якщо обидві паузи зменшити з 1 до 0,5 секунди?', answers:['LED блиматиме повільніше','LED блиматиме швидше','Колір LED зміниться'], correct:1, explain:'Саме так: коротші паузи — частіше блимання.', caution:'GPIO17 — це фізичний контакт 11, а не контакт 17. Звіряємося зі схемою Freenove; LED завжди через резистор.', demo:true},
  {id:3, title:'Натиснув — засвітив', short:'Кнопка стає моєю першою командою для пристрою.', group:'start', time:'20–30 хв', concept:'Вхід → вихід', ref:'Проєкт 2.1 · ButtonLED', page:39, circuit:40, folder:'02.1.1_ButtonLED', file:'ButtonLED.py', parts:['Кнопка','LED','220 Ω','Два резистори 10 кΩ','Макетна плата','Дроти'], goal:'LED світиться, доки я тримаю кнопку, і гасне після відпускання.', why:'Робот має отримувати команди. Кнопка — простий приклад входу, а LED — виходу.', steps:['Подивіться з дорослим схему проєкту 2.1: LED керується GPIO17, кнопка підключена до GPIO18.','Від’єднайте живлення перед складанням. Зверніть увагу на пари з’єднаних ніжок кнопки та обидва резистори 10 кΩ у схемі.','Після перевірки дорослим увімкніть Pi та запусти python3 ButtonLED.py у папці уроку.','Натисни кнопку, потримай і відпусти. Повтори кілька разів.','Покажи родині три частини системи: кнопка дає вхід, Pi обробляє команду, LED показує вихід.'], question:'Яка деталь у цьому досліді передає команду ДО Raspberry Pi?', answers:['Світлодіод','Резистор LED','Кнопка'], correct:2, explain:'Так, кнопка — це вхід. Світлодіод показує результат.', caution:'Чотири ніжки кнопки не означають чотири окремі вимикачі. Розташування перевіряємо за малюнком посібника.'},
  {id:4, title:'Лампа, що пам’ятає', short:'Одне натискання вмикає. Наступне — вимикає.', group:'light', time:'20–25 хв', concept:'Стан і подія', ref:'Проєкт 2.2 · Tablelamp', page:43, circuit:40, folder:'02.2.1_Tablelamp', file:'Tablelamp.py', parts:['Схема кнопки та LED з місії 3'], goal:'Зробити лампу, яка залишається ввімкненою після відпускання кнопки.', why:'Пристрій може пам’ятати свій стан. Це стане в пригоді для режимів майбутнього робота.', steps:['Порівняй схему з місією 3. У проєкті 2.2 використовується та сама схема кнопки й LED.','Запусти python3 Tablelamp.py у папці цього уроку.','Натисни й відпусти кнопку. Перевір, чи світло залишилося ввімкненим.','Натисни ще раз. Знайди в коді led.toggle() — команду, що змінює стан на протилежний.','Намалюй два стани: «світить» і «не світить». З’єднай їх стрілками «натискання».'], question:'Чим ця лампа відрізняється від попередньої місії?', answers:['Пам’ятає стан після відпускання кнопки','Працює без живлення','Вимірює температуру'], correct:0, explain:'Так! Натискання перемикає стан, а не просто утримує світло.', caution:'Навіть якщо змінюємо лише програму, будь-яке переставляння проводів — тільки з від’єднаним живленням.'},
  {id:5, title:'Світло, яке «дихає»', short:'Навчаюся керувати яскравістю, а не лише вмикати.', group:'light', time:'20–30 хв', concept:'Яскравість і PWM', ref:'Проєкт 4.1 · BreathingLED', page:50, circuit:53, folder:'04.1.1_BreathingLED', file:'BreathingLED.py', parts:['LED','Резистор 220 Ω','Макетна плата','Дроти'], goal:'LED плавно стає яскравішим, а потім плавно згасає.', why:'Між «увімкнено» й «вимкнено» є багато корисних рівнів яскравості.', steps:['З дорослим перевір схему проєкту 4.1: LED з резистором на GPIO18 (фізичний контакт 12). Це інший контакт, ніж у першому Blink. Якщо потрібні зміни, спочатку від’єднайте живлення.','Запусти python3 BreathingLED.py. Подивись на один повний цикл зміни яскравості.','Знайди в коді PWMLED. Обговори з дорослим: PWM швидко перемикає сигнал, і ми сприймаємо це як різну яскравість.','Досліди один параметр паузи за раз: передбач результат, зміни, запусти та порівняй.','Придумай, де таке м’яке світло було б зручним удома.'], question:'Що ми вчимося змінювати у цій місії?', answers:['Кількість контактів плати','Яскравість LED','Розмір резистора в програмі'], correct:1, explain:'Правильно: тепер керуємо яскравістю світла.', caution:'PWM — не справжня постійна аналогова напруга. Для цієї місії використовуємо схему LED з посібника.'},
  {id:6, title:'Моя палітра кольорів', short:'Змішую червоний, зелений і синій у RGB-світлодіоді.', group:'light', time:'25–35 хв', concept:'Три канали — багато кольорів', ref:'Проєкт 5.1 · ColorfulLED', page:56, folder:'05.1.1_ColorfulLED', file:'ColorfulLED.py', parts:['RGB LED','Три резистори 220 Ω','Макетна плата','Дроти'], goal:'Отримати кілька кольорів одним RGB-світлодіодом.', why:'Три світлові канали можна поєднувати. Це перший крок до власних індикаторів і світлових сигналів.', steps:['Розглянь із дорослим ніжки RGB LED та схему проєкту 5.1. Важливо визначити спільний контакт.','Вимкніть Pi, від’єднайте живлення й зберіть саме схему RGB LED — з окремим резистором для кожного кольорового каналу.','Після перевірки запусти python3 ColorfulLED.py у папці уроку.','Знайди в коді керування червоним, зеленим і синім. Змінюй один канал за раз разом із дорослим.','Обери три власні сигнали: «думаю», «готово», «потрібна допомога». Запиши відповідні кольори у щоденник.'], question:'З яких трьох кольорів складається RGB?', answers:['Червоний, зелений, синій','Чорний, білий, сірий','Жовтий, білий, рожевий'], correct:0, explain:'Так: Red, Green, Blue — червоний, зелений, синій.', caution:'Звичайний RGB LED і адресний WS2812 — різні компоненти. У цій місії потрібен RGB LED із чотирма ніжками.'},
  {id:7, title:'Ручка, яку розуміє комп’ютер', short:'Повертаю потенціометр і бачу, як змінюються числа.', group:'sensor', time:'30–40 хв', concept:'Аналоговий сигнал і ADC', ref:'Проєкт 7.1 · ADC', page:67, folder:'07.1.1_ADC', file:'ADC.py', parts:['Потенціометр','ADC: ADS7830 або PCF8591','Резистори за схемою','Макетна плата','Дроти'], goal:'Зчитати значення потенціометра й побачити зміну чисел у терміналі.', why:'Raspberry Pi потребує ADC, щоб перетворювати аналогові сигнали на числа. Ця навичка відкриває кілька наступних датчиків.', steps:['Попроси дорослого спочатку ввімкнути I²C і перевірити /dev/i2c-1. На нашій платі цей інтерфейс ще не був увімкнений.','Визначте модель ADC в наборі. У посібнику є окремі схеми для ADS7830 та PCF8591 — оберіть свою.','З від’єднаним живленням зберіть відповідну схему. Дорослий перевіряє живлення, GND та лінії I²C.','Перенесіть усю папку ADC разом із ADCDevice.py. Запусти python3 ADC.py.','Повільно обертай ручку. Запиши числа у трьох положеннях: ліворуч, посередині та праворуч.'], question:'Навіщо нам ADC між потенціометром і Raspberry Pi?', answers:['Щоб крутити ручку швидше','Щоб змінювати мову Python','Щоб перетворити аналоговий сигнал на числа'], correct:2, explain:'Саме так! ADC робить аналоговий сигнал зрозумілим для програми.', caution:'Потрібна попередня підготовка дорослого: I²C зараз не ввімкнений. Живлення ADC та діапазон сигналів звіряємо зі схемою Freenove, призначеною для Pi.'},
  {id:8, title:'Нічник, який помічає темряву', short:'Збираю перший пристрій, що реагує на світ навколо.', group:'sensor', time:'30–40 хв', concept:'Датчик → рішення → дія', ref:'Проєкт 10.1 · Nightlamp', page:89, folder:'10.1.1_Nightlamp', file:'Nightlamp.py', parts:['Фоторезистор','ADC','LED','220 Ω','Три резистори 10 кΩ','Макетна плата','Дроти'], goal:'LED стає яскравішим у темряві та тьмянішим на світлі.', why:'Поєдную вимірювання та керування. Саме так пристрій починає автоматично допомагати людині.', steps:['Спочатку заверши місії PWM та ADC. I²C має бути ввімкнений, а ADC — працювати.','З дорослим оберіть схему Nightlamp для вашої моделі ADC. Перезберіть її з від’єднаним живленням.','Після перевірки запусти python3 Nightlamp.py. Допоміжний ADCDevice.py має бути в тій самій папці.','Затіни фоторезистор долонею, потім відкрий його до світла. Порівняй яскравість LED.','Запиши у щоденник ланцюжок: «світла менше → програма отримує вимірювання → LED світить яскравіше».'], question:'Що має зробити цей нічник, коли навколо стає темніше?', answers:['Збільшити яскравість LED','Зупинити Python','Увімкнути камеру'], correct:0, explain:'Так! Менше навколишнього світла — яскравіший LED.', caution:'Фоторезистор — це датчик освітленості, не температури. Не замінюй його іншою деталлю без перевірки схеми.'},
  {id:9, title:'Джойстик для майбутнього робота', short:'Читаю два напрями руху та натискання.', group:'sensor', time:'30–40 хв', concept:'Координати й керування', ref:'Проєкт 12.1 · Joystick', page:101, folder:'12.1.1_Joystick', file:'Joystick.py', parts:['Джойстик','ADC','Резистори за схемою','Макетна плата','Дроти'], goal:'Побачити в терміналі, як рухи джойстика змінюють покази двох осей.', why:'Це основа ручного керування роботом. Поки вивчаю сигнали, не підключаючи двигуни.', steps:['Використай уже перевірений ADC та ввімкнений I²C. Оберіть з дорослим схему Joystick для вашого ADC.','Зберіть схему без живлення. Дорослий перевіряє живлення джойстика, осі та кнопку.','Запусти python3 Joystick.py разом з ADCDevice.py у папці уроку.','Відхили джойстик ліворуч і праворуч, потім угору і вниз. Знайди, які числа змінюються.','Намалюй стрілки майбутнього пульта робота. Поясни, що має означати кожен рух.'], question:'Чому для руху джойстика потрібні дві осі?', answers:['Одна запасна й ніколи не використовується','Одна описує ліворуч–праворуч, друга — угору–вниз','Обидві вимірюють лише температуру'], correct:1, explain:'Так! Дві осі описують два напрями руху.', caution:'Двигуни в цій місії не підключаємо. Для них знадобляться драйвер, окреме планування живлення та інший урок.'},
  {id:10, title:'Мій власний корисний винахід', short:'Обираю ідею, складаю план і показую результат родині.', group:'sensor', time:'2–3 короткі заняття', concept:'План → прототип → перевірка', ref:'Творчий проєкт за вивченими уроками', page:89, parts:['Деталі з уже перевірених схем','Аркуш для плану','Допомога дорослого'], goal:'Зібрати власну версію вивченого пристрою та пояснити, як він працює.', why:'Я вже вмію читати сигнал, зберігати стан і керувати світлом. Тепер поєднаю ці знання у своєму задумі.', steps:['Обери одну ідею: нічник для родини, RGB-сигнал «мій хід» для шахів або лампу з двома режимами. Це власні варіанти, а не готові уроки Freenove.','Намалюй три блоки: що є входом, яке рішення приймає програма, що є виходом.','Разом із дорослим візьми одну вже перевірену схему за основу. Додавайте тільки одну зміну за раз, перевіряючи контакти та живлення.','Спочатку перевір кожну функцію окремо. Потім випробуй разом та запиши, що довелося виправити.','Покажи батькам, бабусям, дідусям або Маші. Розкажи, що зробив сам, у чому допомогли та чого хочеш навчитися далі.'], question:'Що найкраще зробити перед складанням власного винаходу?', answers:['Одразу з’єднати всі деталі з коробки','Підвищити напругу на GPIO','Намалювати план і перевірити одну функцію за раз'], correct:2, explain:'Так працює винахідник: планує, перевіряє й поступово покращує.', caution:'Нову схему й зміни коду плануйте з дорослим. Готового коду для цього творчого проєкту немає: він залежить від обраної ідеї.'}
];
const storageKey = 'myroslav-lab-v1';
let state = {version:1, done:[], note:''};
let storageAvailable = true;
let activeFilter = 'all';
let currentMission = null;
let demoTimer = null;
let toastTimer;
const $ = selector => document.querySelector(selector);
function validState(value) {
  if (!value || value.version !== 1 || !Array.isArray(value.done) || typeof value.note !== 'string' || value.note.length > 6000) return false;
  return value.done.every(id => Number.isInteger(id) && missions.some(m => m.id === id));
}
try { const saved = JSON.parse(localStorage.getItem(storageKey)); if (validState(saved)) state = saved; } catch { storageAvailable = false; }
function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); storageAvailable = true; }
  catch { storageAvailable = false; }
  $('#save-status').textContent = storageAvailable ? 'Збережено в цьому браузері ✓' : 'Браузер не дозволяє збереження. Завантаж резервну копію перед закриттям.';
}
function toast(message) { $('#toast').textContent = message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 4500); }
function nextMission() { return missions.find(m => !state.done.includes(m.id)); }
function render() {
  const next = nextMission();
  const count = new Set(state.done).size;
  $('#progress-text').textContent = `${count} / ${missions.length}`;
  $('#progress-fill').style.width = `${count / missions.length * 100}%`;
  $('.progress-track').setAttribute('aria-valuenow', count);
  $('#next-title').textContent = next ? next.title : 'Усі місії виконано!';
  $('#next-description').textContent = next ? next.short : 'Час показати винахід родині та обрати наступне відкриття.';
  $('#continue').innerHTML = next ? `${count ? 'Продовжити' : 'Почати місію'} <span>→</span>` : 'Переглянути фінальну місію <span>↗</span>';
  $('#missions').innerHTML = missions.filter(m => activeFilter === 'all' || m.group === activeFilter).map(m => {
    const done = state.done.includes(m.id), isNext = next && next.id === m.id;
    return `<button class="mission-row ${done ? 'is-done' : ''} ${isNext ? 'is-next' : ''}" data-mission="${m.id}" aria-label="Місія ${m.id}: ${m.title}${done ? ', виконано' : ''}"><span class="mission-num">${done ? '✓' : String(m.id).padStart(2, '0')}</span><span><span class="mission-name">${m.title}${isNext ? '<span class="mission-status">НАСТУПНА</span>' : ''}</span><span class="mission-info">${m.time} · ${m.concept}${done ? ' · Виконано' : ''}</span></span><span class="row-arrow" aria-hidden="true">↗</span></button>`;
  }).join('');
}
function openDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open'); }
function closeDialog(dialog) { dialog.close(); }
function openMission(id) {
  const m = missions.find(item => item.id === id);
  if (!m) return;
  currentMission = m;
  const done = state.done.includes(m.id);
  $('#lesson-kicker').textContent = `МІСІЯ ${String(m.id).padStart(2,'0')} / ${missions.length} · ${done ? 'ВИКОНАНО' : m.time}`;
  $('#lesson-content').innerHTML = `<h2 class="lesson-heading" id="lesson-title">${m.title}</h2><p class="lesson-desc">${m.goal}</p><div class="lesson-tags"><span>${m.concept}</span><span>${m.ref}</span></div><div class="lesson-section"><h3>Навіщо це мені?</h3><p>${m.why}</p></div><div class="lesson-section"><h3>Підготуй разом із дорослим</h3><div class="parts">${m.parts.map(p => `<span>${p}</span>`).join('')}</div></div><div class="lesson-callout"><strong>Перед початком.</strong> ${m.caution}${m.id > 1 ? ' Проводами займаємося тільки з від’єднаним живленням. Перед увімкненням дорослий перевіряє схему.' : ''}</div><div class="lesson-section"><h3>Крок за кроком</h3><ol>${m.steps.map(step => `<li>${step}</li>`).join('')}</ol></div>${m.file ? `<div class="lesson-section"><h3>Запуск на Raspberry Pi</h3><p>Код з архіву потрібно перенести на Pi. Відкрий термінал у папці <strong>${m.folder}</strong> і запусти:</p><pre class="lesson-code">python3 ${m.file}</pre><p>Зупинити програму: <strong>Ctrl+C</strong>. Кнопки на сайті не запускають GPIO.</p></div>` : ''}<div class="lesson-links"><a href="assets/freenove-python.pdf#page=${m.page}" target="_blank" rel="noopener">Урок і схеми в посібнику ↗</a>${m.circuit ? `<a href="assets/freenove-python.pdf#page=${m.circuit}" target="_blank" rel="noopener">Одразу до схеми ↗</a>` : ''}${m.folder ? `<a href="lessons/${m.folder}.zip" download>Завантажити код уроку ↓</a>` : ''}</div>${m.demo ? `<div class="mini-demo"><div class="demo-led" id="demo-led" aria-hidden="true"></div><div class="demo-controls"><label for="blink-speed">Екранний дослід: пауза <strong id="blink-value">1,0 с</strong><input id="blink-speed" type="range" min="0.2" max="2" value="1" step="0.1"></label><button class="button small dark" id="demo-toggle">Увімкнути блимання</button><div class="demo-label">Це лише модель на екрані. Плата не підключається.</div></div></div>` : ''}<div class="lesson-section quiz"><fieldset><legend>Перевір себе: ${m.question}</legend>${m.answers.map((a,i) => `<label><input type="radio" name="mission-answer" value="${i}"><span>${a}</span></label>`).join('')}</fieldset><div class="quiz-feedback" id="quiz-feedback" role="status"></div></div><div class="check-list"><label><input type="checkbox" class="mission-check"> Я виконав дослід разом із дорослим</label><label><input type="checkbox" class="mission-check"> Я перевірив результат і можу його пояснити</label><label><input type="checkbox" class="mission-check"> Я записав або розповів про своє відкриття</label></div><div class="finish-row"><button class="button dark" id="finish-mission" disabled>${done ? 'Підтвердити ще раз' : 'Місію виконано'} <span>✓</span></button><small>Спочатку виконай місію, обери правильну відповідь і познач три пункти.</small></div>${done ? '<button class="reset-mission" id="reset-mission">Повернути цю місію у план</button>' : ''}`;
  openDialog($('#lesson-dialog'));
}
function updateCompletion() {
  const answer = $('#lesson-content input[name="mission-answer"]:checked');
  const correct = answer && Number(answer.value) === currentMission.correct;
  const checks = [...document.querySelectorAll('.mission-check')].every(c => c.checked);
  $('#finish-mission').disabled = !(correct && checks);
}
$('#missions').addEventListener('click', event => { const button = event.target.closest('[data-mission]'); if (button) openMission(Number(button.dataset.mission)); });
$('#continue').addEventListener('click', () => openMission((nextMission() || missions[missions.length-1]).id));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b => { const active = b === button; b.classList.toggle('active',active); b.setAttribute('aria-pressed',active); });
  render();
}));
$('#lesson-content').addEventListener('change', event => {
  if (event.target.name === 'mission-answer') {
    const correct = Number(event.target.value) === currentMission.correct;
    $('#quiz-feedback').textContent = correct ? currentMission.explain : 'Спробуй ще раз. Підказка є в кроках цієї місії.';
    $('#quiz-feedback').style.color = correct ? '#194e43' : '#8e4427';
  }
  if (event.target.matches('input[type="radio"], .mission-check')) updateCompletion();
});
$('#lesson-content').addEventListener('click', event => {
  if (event.target.closest('#finish-mission') && !$('#finish-mission').disabled) {
    if (!state.done.includes(currentMission.id)) state.done.push(currentMission.id);
    persist(); render(); closeDialog($('#lesson-dialog')); toast('Відкриття зараховано! Наступний крок уже чекає ✳');
  }
  if (event.target.closest('#reset-mission')) { state.done = state.done.filter(id => id !== currentMission.id); persist(); render(); closeDialog($('#lesson-dialog')); toast('Місію повернуто у план. Її можна повторити.'); }
  if (event.target.closest('#demo-toggle')) {
    if (demoTimer) stopDemo(); else startDemo();
  }
});
function stopDemo() { clearInterval(demoTimer); demoTimer = null; $('#demo-led')?.classList.remove('on'); const button = $('#demo-toggle'); if (button) button.textContent = 'Увімкнути блимання'; }
function startDemo() { stopDemo(); const delay = Number($('#blink-speed').value)*1000; $('#demo-toggle').textContent = 'Зупинити'; $('#demo-led').classList.add('on'); demoTimer = setInterval(() => $('#demo-led')?.classList.toggle('on'),delay); }
$('#lesson-content').addEventListener('input', event => { if (event.target.id === 'blink-speed') { $('#blink-value').textContent = `${Number(event.target.value).toFixed(1).replace('.',',')} с`; if (demoTimer) startDemo(); } });
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(document.getElementById(button.dataset.close))));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog); } });
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open'); if (dialog.id === 'lesson-dialog') stopDemo(); });
});
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  $('#full-photo').src = `assets/memory-${button.dataset.photo}.jpg`;
  $('#full-photo').alt = button.querySelector('img').alt;
  $('#photo-caption').textContent = button.dataset.caption;
  openDialog($('#photo-dialog'));
}));
$('#journal-note').value = state.note;
if (!storageAvailable) $('#save-status').textContent = 'Збереження браузера недоступне. Використовуй резервну копію.';
$('#journal-note').addEventListener('input', event => { state.note = event.target.value; persist(); });
$('#export').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({...state, exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = `myroslav-lab-${new Date().toISOString().slice(0,10)}.json`;
  document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url),1000);
  toast('Резервну копію підготовлено до завантаження.');
});
$('#import').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 100000) throw new Error('large');
    const data = JSON.parse(await file.text());
    if (!validState(data)) throw new Error('format');
    const mergedNote = !state.note ? data.note : !data.note || state.note === data.note ? state.note : `${state.note}\n\n— З резервної копії —\n${data.note}`;
    if (mergedNote.length > 6000) { toast('Разом нотатки довші за 6000 символів. Збережи поточну копію та скороти запис перед об’єднанням.'); return; }
    state.done = [...new Set([...state.done,...data.done])]; state.note = mergedNote;
    $('#journal-note').value = state.note; persist(); render(); toast('Копію відновлено. Поточні відмітки й записи збережено.');
  } catch { toast('Не вдалося відкрити копію. Обери JSON-файл, збережений цим сайтом.'); }
  finally { event.target.value = ''; }
});
render();
