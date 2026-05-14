const CONFIG = {
  menuUrl: "/api/menu",
  menuFallbackUrl: "data/menu.json",
  eventsUrl: "/api/events",
  ordersUrl: "/api/orders",
  suggestionsUrl: "/api/suggestions",
  promoPreviewUrl: "/api/promos/preview",
  telegramUrl: "https://t.me/Mussicafe",
  cartStorageKey: "mussi-cart-v1",
  lastOrderStorageKey: "mussi-last-order-v6",
  ordersStorageKey: "mussi-orders-v6",
  languageStorageKey: "mussi-language-v1"
};

function isStaticPublicHost() {
  try {
    return typeof location !== "undefined" && location.hostname.toLowerCase().endsWith("github.io");
  } catch {
    return false;
  }
}

const I18N = {
  ru: {
    "meta.title": "MUSSI — растительные пудинги и десерты, самовывоз у ВДНХ",
    "meta.description": "MUSSI — кафе с растительными пудингами, выпечкой и напитками у ВДНХ. На сайте оформляется самовывоз, доставку привозят Яндекс Еда и Delivery Club.",
    "skip.menu": "Перейти к меню",
    "nav.menu": "Меню",
    "nav.specials": "Спешлы",
    "nav.delivery": "Как получить",
    "nav.about": "О нас",
    "nav.faq": "FAQ",
    "cart.open": "Корзина",
    "hero.eyebrow": "Десертное ателье · Москва",
    "hero.title": "Десерты MUSSI с европейским настроением",
    "hero.lead": "Пудинги, выпечка и напитки на растительной основе: мягкие текстуры, сезонные вкусы и спокойная эстетика маленького кафе.",
    "hero.cta.menu": "Собрать заказ",
    "hero.cta.delivery": "Как получить",
    "hero.stat.radius": "сервисы доставки от ВДНХ",
    "hero.stat.hours": "каждый день",
    "hero.stat.plant": "plant based",
    "hero.card.label": "Хит",
    "hero.card.title": "Банановый пудинг",
    "hero.card.desc": "заварной банановый крем · ванильный бисквит · кокосовое печенье",
    "hero.note.one": "Ателье",
    "hero.note.two": "Растительная основа",
    "hero.note.three": "свежие десерты",
    "about.eyebrow": "Информация о нас",
    "about.title": "Авторские десерты, кофе и настроение MUSSI",
    "about.plant.title": "Растительная основа",
    "about.plant.text": "Вся продукция на растительной основе: пудинги, выпечка, кофе и лимонады.",
    "about.low.title": "Low waste",
    "about.low.text": "На производстве сортируют отходы и внимательно относятся к ресурсам.",
    "about.special.title": "Спешлы",
    "about.special.text": "Сезонные вкусы выходят как короткие коллекции: сегодня есть, завтра уже может не быть.",
    "founder.eyebrow": "Основательница MUSSI",
    "founder.title": "Лиза Мадрид",
    "founder.text": "Вы все знаете, что я уделяю огромное внимание еде в разных странах, особую любовь я питаю к американским пудингам, и тадам, теперь вы можете их попробовать.",
    "founder.note": "MUSSI вырос из личной насмотренности, путешествий и желания сделать десерт, который выглядит нежно, а по вкусу остается честным, насыщенным и растительным.",
    "specials.eyebrow": "Спешлы сезона",
    "specials.title": "То, что есть сейчас и может исчезнуть завтра",
    "specials.empty.title": "Сезонный дроп готовится",
    "specials.empty.text": "Как только в Telegram-боте товар добавят в спешлы, он появится здесь автоматически.",
    "menu.eyebrow": "Меню",
    "menu.title": "Пудинги, выпечка и сезонные спешлы",
    "menu.search.label": "Поиск по меню",
    "menu.search.placeholder": "банановый, матча, брауни...",
    "menu.quickFilters": "Быстрые фильтры",
    "filter.featured": "хиты",
    "filter.seasonal": "сезонное",
    "filter.drink": "напитки",
    "filter.chocolate": "шоколад",
    "category.all": "Все",
    "category.puddings": "Пудинги",
    "category.bakery": "Выпечка",
    "category.specials": "Спешлы",
    "category.drinks": "Напитки",
    "menu.reset": "Сбросить фильтры",
    "count.one": "позиция",
    "count.few": "позиции",
    "count.many": "позиций",
    "cart.countSuffix": "в корзине",
    "cart.empty": "Корзина пустая. Добавьте пудинг, сет или напиток из меню.",
    "cart.openButton": "Открыть корзину",
    "cart.quantity": "Количество",
    "cart.decrease": "Уменьшить",
    "cart.increase": "Увеличить",
    "cart.remove": "Удалить",
    "cart.totalKnown": "Итого",
    "cart.unknownPlus": "+ уточнение",
    "order.summary.title": "Заказ MUSSI",
    "order.summary.knownTotal": "Итого по позициям с ценой",
    "order.summary.name": "Имя",
    "order.summary.contact": "Телефон",
    "order.summary.pickupTime": "Самовывоз",
    "order.summary.comment": "Комментарий",
    "order.summary.promo": "Промокод",
    "order.eyebrow": "Как заказать",
    "order.title": "Соберите заказ на самовывоз — команда MUSSI подтвердит детали по телефону",
    "order.text": "На сайте оформляется только самовывоз: выберите десерты, оставьте телефон и заберите заказ в кафе. Доставку курьером привезут Яндекс Еда и Delivery Club.",
    "order.step1": "1. Выберите продукт",
    "order.step2": "2. Оставьте телефон",
    "order.step3": "3. Оплатите (тестово не работает)",
    "mini.empty.title": "Ваша корзина",
    "mini.empty.text": "Пока пусто. Добавьте банановый пудинг, шоколадный брауни или сет из трех вкусов.",
    "delivery.eyebrow": "Как получить заказ",
    "delivery.title": "Самовывоз у ВДНХ или доставка курьером — каждый день с 10:00 до 19:00",
    "delivery.link": "Открыть страницу доставки",
    "delivery.card.title": "Доставка курьером",
    "delivery.card.text": "Курьер привозит заказ в радиусе 10 км от метро ВДНХ. Оформите доставку в Яндекс Еде или Delivery Club — корзина на сайте принимает только самовывоз.",
    "delivery.pickup.title": "Самовывоз",
    "delivery.pickup.text": "На сайте оформляется только самовывоз. Адрес: ул. Академика Королева, 13с1, подъезд 1. Вход с ул. Аргуновской, ориентир — вывеска «телеканал Спас».",
    "delivery.pickup.note": "Для пропуска нужен паспорт или права. После проходной идите к лифтам по длинному желтому коридору до лифта N10, 7 этаж, направо до 717к.",
    "delivery.telegram.title": "Telegram",
    "delivery.telegram.text": "Следите за спешлами, открытиями и новыми вкусами в Telegram-канале MUSSI.",
    "delivery.telegram.link": "Перейти в Telegram",
    "reviews.eyebrow": "Отзывы",
    "reviews.title": "Реальные отзывы, которые можно проверить",
    "reviews.source": "Цитаты взяты из публичных отзывов MUSSI. Ниже оставлены ссылки на источники.",
    "reviews.source.yandex": "Проверить отзывы с Яндекса",
    "reviews.source.2gis": "Открыть 2ГИС: 4.7 · 200 оценок",
    "reviews.one": "“Заведение очень милое, все фиолетовое.”",
    "reviews.one.source": "Яндекс · Анастасия · месяц назад",
    "reviews.two": "“Вкусно, уютно, музыка не громкая, можно спокойно поболтать с подружкой.”",
    "reviews.two.source": "Яндекс · Дарья У. · месяц назад",
    "reviews.three": "“Шоколадный оказался очень вкусным и горьковатым, для меня идеал!”",
    "reviews.three.source": "Яндекс · moomin moo · 6 месяцев назад",
    "reviews.check": "Проверить",
    "faq.eyebrow": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.one.q": "1",
    "faq.one.a": "1",
    "faq.two.q": "2",
    "faq.two.a": "2",
    "faq.three.q": "3",
    "faq.three.a": "3",
    "faq.four.q": "4",
    "faq.four.a": "4",
    "footer.text": "Пудинги, plant based десерты и напитки.",
    "cart.eyebrow": "Самовывоз",
    "cart.title": "Ваш заказ",
    "cart.close": "Закрыть корзину",
    "cart.name": "Имя",
    "cart.name.placeholder": "Как к вам обращаться",
    "cart.contact": "Телефон",
    "cart.contact.placeholder": "+7 999 999-99-99",
    "cart.pickupTime": "Когда забрать",
    "cart.pickupDate": "Дата",
    "cart.pickupClock": "Время",
    "cart.pickupTime.help": "Каждый день с 10:00 до 19:00, последний слот самовывоза — 18:55. Не раньше чем через 15 минут от момента заказа.",
    "cart.comment": "Комментарий",
    "cart.comment.placeholder": "Аллергии, пожелания, кому передать",
    "cart.promo": "Промокод",
    "promo.empty": "Введите промокод, если он есть.",
    "promo.applied": "Промокод применен: скидка {percent}% (-{amount} ₽).",
    "promo.notFound": "Такого промокода нет или он выключен.",
    "promo.checkFailed": "Не получилось проверить промокод.",
    "promo.staticHost": "На демо-сайте без сервера промокоды не проверяются.",
    "cart.total": "Итого",
    "cart.note.default": "После оформления статус заказа — во вкладке «Ваши заказы». Доставку курьером оформите в Яндекс Еде или Delivery Club.",
    "cart.note.unknown": "В заказе есть позиции без цены. Финальную сумму подтвердит сотрудник MUSSI.",
    "cart.submit": "Оформить заказ",
    "cart.repeat": "Повторить последний заказ",
    "cart.tab.cart": "Корзина",
    "cart.tab.orders": "Ваши заказы",
    "checkout.hint.empty": "Добавьте хотя бы один товар, чтобы оформить заказ.",
    "checkout.hint.phone": "Введите телефон: +7 999 999-99-99.",
    "checkout.hint.invalidPhone": "Проверьте номер телефона: нужны 10-11 цифр российского номера.",
    "checkout.hint.pickupTime": "Укажите, когда заберете заказ.",
    "checkout.hint.ready": "Все готово. Можно оформить заказ.",
    "checkout.hint.staticHost":
      "Это демо на GitHub Pages: верстка и корзина, без сервера заказ не уйдет. Полный сценарий — локально (npm start).",
    "orders.empty": "Здесь появятся ваши последние заказы.",
    "orders.active": "Активный заказ",
    "orders.recent": "Последние заказы",
    "orders.number": "Номер заказа",
    "orders.total": "Сумма",
    "orders.subtotal": "До скидки",
    "orders.discount": "Скидка",
    "orders.noDiscount": "Скидка: нет",
    "orders.contactRequired": "Укажите телефон, чтобы мы могли подтвердить заказ.",
    "orders.nameRequired": "Укажите имя, чтобы мы могли оформить заказ.",
    "orders.phoneInvalid": "Введите настоящий номер телефона: +7 999 999-99-99.",
    "orders.pickupTimeRequired": "Укажите время самовывоза, чтобы мы успели подготовить заказ.",
    "orders.pickupTimeInvalid": "Время самовывоза указано в неверном формате.",
    "orders.pickupTimePast": "Время самовывоза должно быть минимум через 15 минут.",
    "orders.pickupTimeHours": "Мы принимаем гостей с 10:00 до 19:00. Выберите время с 10:00 до 18:55.",
    "orders.pickupTimeFar": "Выберите время самовывоза в пределах ближайших 14 дней.",
    "orders.noneRecent": "Последних заказов пока нет.",
    "orders.eta": "Примерное время",
    "orders.pickupTime": "Самовывоз",
    "orders.pickupCode": "Код для выдачи",
    "orders.cancelReason": "Причина отмены",
    "orders.repeat": "Повторить заказ",
    "suggestion.title": "Есть идея для MUSSI?",
    "suggestion.text": "Пока заказ активен, можно отправить идею, пожелание или что улучшить.",
    "suggestion.placeholder": "Напишите вкус, идею, пожелание или что улучшить",
    "suggestion.submit": "Отправить в предложку",
    "suggestion.empty": "Напишите текст предложки.",
    "suggestion.success": "Спасибо. Идея улетела в предложку MUSSI.",
    "suggestion.failed": "Не получилось отправить предложку.",
    "suggestion.inactive": "Предложка доступна только для активного заказа.",
    "suggestion.alreadySent": "Предложка по этому заказу уже отправлена.",
    "product.ingredients": "Состав",
    "product.nutrition": "КБЖУ",
    "product.add": "Добавить в корзину",
    "product.added": "Добавлено",
    "product.priceUnknown": "уточняется",
    "empty.title": "Ничего не нашли",
    "empty.text": "Попробуйте другой запрос или сбросьте фильтры.",
    "toast.added": "Добавили в корзину MUSSI.",
    "toast.emptyCart": "Сначала добавьте что-нибудь в корзину.",
    "toast.orderCreated": "Заказ принят на самовывоз. Номер сохранен во вкладке «Ваши заказы».",
    "toast.orderCreateFailed": "Не получилось создать заказ. Запустите сайт через npm start.",
    "toast.staticHostCheckout":
      "Здесь нет бэкенда: заказ не отправить. Полный сценарий — локально с npm start.",
    "toast.orderUpdated": "Статус заказа обновился.",
    "toast.orderAcceptedWithCode": "Заказ принят. Код для выдачи: {code}.",
    "toast.paid": "Статус заказа обновлен.",
    "toast.payFailed": "Не получилось провести тестовую оплату.",
    "toast.mockPayDisabled": "Тестовая оплата отключена на сервере.",
    "toast.noLastOrder": "Последнего заказа пока нет.",
    "toast.repeat": "Последний заказ вернулся в корзину.",
    "toast.repeatFailed": "Не получилось восстановить последний заказ.",
    "toast.menuUpdated": "Меню обновилось из Telegram-админки.",
    "status.new": "Обрабатываем",
    "status.accepted": "Заказ принят",
    "status.contacted": "С вами связались",
    "status.preparing": "Заказ готовится",
    "status.ready": "Готов к выдаче",
    "status.done": "Заказ выполнен",
    "status.cancelled": "Отменен",
    "status.pending": "Обрабатываем",
    "status.paid": "Заказ принят",
    "status.message": "Мы видим заказ и свяжемся с вами по указанному контакту.",
    "status.acceptedPickupMessage": "На выдаче назовите код {code}.",
    "status.readyMessage": "Заказ готов. Можно забирать.",
    "status.cancelledMessage": "Заказ отменен. Причина указана выше.",
    "status.terminal": "Заказ закрыт: клиент его уже забрал. Его можно повторить или собрать новый.",
    "status.mockPay": "Обновить статус"
  },
  en: {
    "meta.title": "MUSSI — plant based puddings and desserts, pickup near VDNH",
    "meta.description": "MUSSI is a plant based cafe with puddings, bakery and drinks near VDNH. The site accepts pickup orders; for courier delivery use Yandex Eda or Delivery Club.",
    "skip.menu": "Skip to menu",
    "nav.menu": "Menu",
    "nav.specials": "Specials",
    "nav.delivery": "Pickup & delivery",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "cart.open": "Cart",
    "hero.eyebrow": "Dessert atelier · Moscow",
    "hero.title": "MUSSI desserts with a European cafe mood",
    "hero.lead": "Plant based puddings, bakery and drinks with soft textures, seasonal flavours and the calm feeling of a small cafe.",
    "hero.cta.menu": "Build an order",
    "hero.cta.delivery": "How to get it",
    "hero.stat.radius": "delivery services from VDNH",
    "hero.stat.hours": "every day",
    "hero.stat.plant": "plant based",
    "hero.card.label": "Bestseller",
    "hero.card.title": "Banana pudding",
    "hero.card.desc": "banana custard · vanilla sponge · coconut cookie",
    "hero.note.one": "Atelier",
    "hero.note.two": "Plant based",
    "hero.note.three": "fresh daily",
    "about.eyebrow": "About",
    "about.title": "Signature desserts, coffee and the MUSSI mood",
    "about.plant.title": "Plant based",
    "about.plant.text": "All products are plant based: puddings, bakery, coffee and lemonades.",
    "about.low.title": "Low waste",
    "about.low.text": "The production sorts waste and treats resources carefully.",
    "about.special.title": "Specials",
    "about.special.text": "Seasonal flavours come as short drops: here today, possibly gone tomorrow.",
    "founder.eyebrow": "MUSSI founder",
    "founder.title": "Liza Madrid",
    "founder.text": "You know how much attention I give to food in different countries. I especially love American puddings, and now you can finally try them too.",
    "founder.note": "MUSSI grew from personal taste, travel and the wish to make a dessert that feels gentle visually, yet stays honest, rich and plant based in flavour.",
    "specials.eyebrow": "Seasonal specials",
    "specials.title": "Here now, possibly gone tomorrow",
    "specials.empty.title": "The seasonal drop is being prepared",
    "specials.empty.text": "Once a product is marked as special in the Telegram bot, it will appear here automatically.",
    "menu.eyebrow": "Menu",
    "menu.title": "Puddings, bakery and seasonal specials",
    "menu.search.label": "Search menu",
    "menu.search.placeholder": "banana, matcha, brownie...",
    "menu.quickFilters": "Quick filters",
    "filter.featured": "hits",
    "filter.seasonal": "seasonal",
    "filter.drink": "drinks",
    "filter.chocolate": "chocolate",
    "category.all": "All",
    "category.puddings": "Puddings",
    "category.bakery": "Bakery",
    "category.specials": "Specials",
    "category.drinks": "Drinks",
    "menu.reset": "Reset filters",
    "count.one": "item",
    "count.few": "items",
    "count.many": "items",
    "cart.countSuffix": "in cart",
    "cart.empty": "Your cart is empty. Add a pudding, set or drink from the menu.",
    "cart.openButton": "Open cart",
    "cart.quantity": "Quantity",
    "cart.decrease": "Decrease",
    "cart.increase": "Increase",
    "cart.remove": "Remove",
    "cart.totalKnown": "Total",
    "cart.unknownPlus": "+ confirmation",
    "order.summary.title": "MUSSI order",
    "order.summary.knownTotal": "Known total",
    "order.summary.name": "Name",
    "order.summary.contact": "Phone",
    "order.summary.pickupTime": "Pickup",
    "order.summary.comment": "Comment",
    "order.summary.promo": "Promo code",
    "order.eyebrow": "How to order",
    "order.title": "Build a pickup order — MUSSI will confirm the details by phone",
    "order.text": "The site accepts pickup only: choose the desserts, leave your phone and grab the order at the cafe. For courier delivery use Yandex Eda or Delivery Club.",
    "order.step1": "1. Choose a product",
    "order.step2": "2. Leave your phone",
    "order.step3": "3. Pay (test checkout not wired)",
    "mini.empty.title": "Your cart",
    "mini.empty.text": "Empty for now. Add banana pudding, chocolate brownie pudding or a tasting set.",
    "delivery.eyebrow": "How to get your order",
    "delivery.title": "Pickup near VDNH or courier delivery — every day from 10:00 to 19:00",
    "delivery.link": "Open delivery page",
    "delivery.card.title": "Courier delivery",
    "delivery.card.text": "Couriers deliver within 10 km from VDNH metro. Order through Yandex Eda or Delivery Club — the cart on this site accepts pickup only.",
    "delivery.pickup.title": "Pickup",
    "delivery.pickup.text": "The site accepts pickup orders only. Address: Akademika Koroleva 13s1, entrance 1. Entrance from Argunovskaya street, landmark: Spas TV sign.",
    "delivery.pickup.note": "A passport or driving license is required for entry. After security, follow the yellow corridor to elevator N10, 7th floor, right to 717k.",
    "delivery.telegram.title": "Telegram",
    "delivery.telegram.text": "Follow specials, launches and new flavours in the MUSSI Telegram channel.",
    "delivery.telegram.link": "Open Telegram",
    "reviews.eyebrow": "Reviews",
    "reviews.title": "Real reviews you can verify",
    "reviews.source": "Quotes are taken from public MUSSI reviews. Source links are below.",
    "reviews.source.yandex": "Check Yandex reviews",
    "reviews.source.2gis": "Open 2GIS: 4.7 · 200 ratings",
    "reviews.one": "“The place is very cute, everything is violet.”",
    "reviews.one.source": "Yandex · Anastasia · one month ago",
    "reviews.two": "“Tasty and cozy, the music is not loud, you can chat calmly with a friend.”",
    "reviews.two.source": "Yandex · Daria U. · one month ago",
    "reviews.three": "“The chocolate one was very tasty and pleasantly bitter, ideal for me!”",
    "reviews.three.source": "Yandex · moomin moo · 6 months ago",
    "reviews.check": "Verify",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions",
    "faq.one.q": "1",
    "faq.one.a": "1",
    "faq.two.q": "2",
    "faq.two.a": "2",
    "faq.three.q": "3",
    "faq.three.a": "3",
    "faq.four.q": "4",
    "faq.four.a": "4",
    "footer.text": "American puddings, plant based desserts and drinks.",
    "cart.eyebrow": "Pickup",
    "cart.title": "Your order",
    "cart.close": "Close cart",
    "cart.name": "Name",
    "cart.name.placeholder": "How should we call you",
    "cart.contact": "Phone",
    "cart.contact.placeholder": "+7 999 999-99-99",
    "cart.pickupTime": "Pickup slot",
    "cart.pickupDate": "Date",
    "cart.pickupClock": "Time",
    "cart.pickupTime.help": "Open every day from 10:00 to 19:00, last pickup slot 18:55. At least 15 minutes from when you place the order.",
    "cart.comment": "Comment",
    "cart.comment.placeholder": "Allergies, wishes, who will pick up",
    "cart.promo": "Promo code",
    "promo.empty": "Enter a promo code if you have one.",
    "promo.applied": "Promo applied: {percent}% off (-{amount} ₽).",
    "promo.notFound": "This promo code does not exist or is disabled.",
    "promo.checkFailed": "Could not check the promo code.",
    "promo.staticHost": "Promo codes are not verified on this static demo.",
    "cart.total": "Total",
    "cart.note.default": "After checkout, order status is under “Your orders”. For courier delivery use Yandex Eda or Delivery Club.",
    "cart.note.unknown": "Some items have no price. MUSSI staff will confirm the final total.",
    "cart.submit": "Place order",
    "cart.repeat": "Repeat last order",
    "cart.tab.cart": "Cart",
    "cart.tab.orders": "Your orders",
    "checkout.hint.empty": "Add at least one item to place an order.",
    "checkout.hint.phone": "Enter your phone: +7 999 999-99-99.",
    "checkout.hint.invalidPhone": "Check the phone number: use 10-11 digits for a Russian number.",
    "checkout.hint.pickupTime": "Tell us when you will pick the order up.",
    "checkout.hint.ready": "Everything is ready. You can place the order.",
    "checkout.hint.staticHost":
      "GitHub Pages demo: layout and cart only; orders need the local server (npm start).",
    "orders.empty": "Your latest orders will appear here.",
    "orders.active": "Active order",
    "orders.recent": "Latest orders",
    "orders.number": "Order number",
    "orders.total": "Total",
    "orders.subtotal": "Before discount",
    "orders.discount": "Discount",
    "orders.noDiscount": "Discount: none",
    "orders.contactRequired": "Add a phone number so we can confirm the order.",
    "orders.nameRequired": "Enter your name so we can place the order.",
    "orders.phoneInvalid": "Enter a real phone number: +7 999 999-99-99.",
    "orders.pickupTimeRequired": "Add a pickup time so we have time to prepare the order.",
    "orders.pickupTimeInvalid": "Pickup time has an invalid format.",
    "orders.pickupTimePast": "Pickup time must be at least 15 minutes from now.",
    "orders.pickupTimeHours": "We are open from 10:00 to 19:00. Pick a time between 10:00 and 18:55.",
    "orders.pickupTimeFar": "Pick a pickup time within the next 14 days.",
    "orders.noneRecent": "No recent orders yet.",
    "orders.eta": "Estimated time",
    "orders.pickupTime": "Pickup",
    "orders.pickupCode": "Pickup code",
    "orders.cancelReason": "Cancellation reason",
    "orders.repeat": "Repeat order",
    "suggestion.title": "Have an idea for MUSSI?",
    "suggestion.text": "While the order is active, you can send an idea, wish or improvement.",
    "suggestion.placeholder": "Write a flavour, idea, wish or improvement",
    "suggestion.submit": "Send suggestion",
    "suggestion.empty": "Write a suggestion first.",
    "suggestion.success": "Thank you. The idea went to the MUSSI suggestion box.",
    "suggestion.failed": "Could not send the suggestion.",
    "suggestion.inactive": "Suggestions are available only for an active order.",
    "suggestion.alreadySent": "A suggestion has already been sent for this order.",
    "product.ingredients": "Ingredients",
    "product.nutrition": "Nutrition",
    "product.add": "Add to cart",
    "product.added": "Added",
    "product.priceUnknown": "to confirm",
    "empty.title": "Nothing found",
    "empty.text": "Try another search or reset filters.",
    "toast.added": "Added to MUSSI cart.",
    "toast.emptyCart": "Add something to cart first.",
    "toast.orderCreated": "Pickup order received. The number is saved in “Your orders”.",
    "toast.orderCreateFailed": "Could not create order. Run the site with npm start.",
    "toast.staticHostCheckout": "No backend here: order cannot be sent. Run locally with npm start for the full flow.",
    "toast.orderUpdated": "Order status updated.",
    "toast.orderAcceptedWithCode": "Order accepted. Pickup code: {code}.",
    "toast.paid": "Order status updated.",
    "toast.payFailed": "Could not complete test payment.",
    "toast.mockPayDisabled": "Test payment is disabled on this server.",
    "toast.noLastOrder": "No last order yet.",
    "toast.repeat": "Last order returned to cart.",
    "toast.repeatFailed": "Could not restore last order.",
    "toast.menuUpdated": "Menu updated from Telegram admin.",
    "status.new": "Processing",
    "status.accepted": "Order accepted",
    "status.contacted": "We contacted you",
    "status.preparing": "Order is being prepared",
    "status.ready": "Ready for pickup",
    "status.done": "Order completed",
    "status.cancelled": "Cancelled",
    "status.pending": "Processing",
    "status.paid": "Order accepted",
    "status.message": "We see your order and will contact you using the provided contact.",
    "status.acceptedPickupMessage": "At pickup, give staff code {code}.",
    "status.readyMessage": "The order is ready for pickup.",
    "status.cancelledMessage": "The order was cancelled. The reason is shown above.",
    "status.terminal": "This order is closed: the customer has already picked it up. You can repeat it or build a new one.",
    "status.mockPay": "Refresh status"
  }
};

const PRODUCT_TRANSLATIONS = {
  en: {
    "charlotte-popcorn": {
      name: "Charlotte Pudding with Popcorn",
      description: "Finely diced sweet and tart apples are cooked with warm spices, while sweet-salty popcorn folds into a delicate popcorn mousse.",
      ingredients: "Plant cream, soy milk, apples, apple puree, wheat flour, sunflower oil, sugar, Holy Corn popcorn, apple juice, corn starch, popcorn syrup, margarine, vanilla sugar, cinnamon, spice blend, vinegar, baking powder, salt, vanillin, baking soda.",
      nutrition: "Nutrition per 100 g: 186 / 2.6 / 10.2 / 20",
      size: "100 g"
    },
    "banana-pudding": {
      name: "Banana Pudding",
      description: "Banana mousse made with banana custard and whipped plant cream, milk-soaked vanilla sponge, fresh banana slices, crisp coconut cookie and a touch of cinnamon.",
      ingredients: "Fresh banana, wheat flour, soy milk, banana plant milk, plant cream, coconut flakes, margarine, sunflower oil, corn starch, sugar, vinegar, salt, turmeric, cinnamon, vanillin, baking powder, baking soda.",
      nutrition: "Nutrition per 100 g: 181.5 / 1.8 / 9.2 / 22.9",
      size: "100 g"
    },
    "chocolate-brownie-pudding": {
      name: "Chocolate Pudding with Salted Brownie",
      description: "Chocolate mousse with dark chocolate and coconut cream, chocolate sponge soaked with strong coffee, salted fudgy brownie and Oreo crumb.",
      ingredients: "Dark chocolate, fresh banana, soy milk, coconut milk, plant cream, sugar, wheat flour, cocoa, corn starch, margarine, flaxseed flour, coffee, sunflower oil, apple puree, sea salt, baking powder, baking soda, vanillin.",
      nutrition: "Nutrition per 100 g: 284.9 / 3.2 / 18.6 / 26.4",
      size: "100 g"
    },
    "trio-set": {
      name: "Three-Flavour Set",
      description: "A set of three signature flavours: banana, chocolate with salted brownie, and charlotte with popcorn. Made for trying everything at once.",
      ingredients: "Assorted mini puddings in three flavours.",
      nutrition: "Nutrition depends on the flavours in the set",
      size: "3 mini puddings"
    },
    "cherry-pie": {
      name: "Cherry Pie with Oat-Almond Crumble",
      description: "Tender crust, juicy sour cherry with lemon and an oat-almond crumble.",
      ingredients: "Wheat flour, cherry, margarine, white sugar, purified water, oat flakes, almond kernels, flaxseed flour, lemon, starch, baking powder, salt, vanillin.",
      nutrition: "Nutrition per 180 g: 408 / 5 / 16 / 61",
      warning: "In rare cases, small cherry pit fragments may be present.",
      size: "180 g"
    },
    "chocolate-cookie": {
      name: "Chocolate Cookie",
      description: "Rich chocolate fudge cookie with whole roasted hazelnuts and sea salt flakes.",
      ingredients: "Dark chocolate, margarine, sugar, soy milk, wheat flour, cocoa, whole roasted hazelnuts, flaxseed flour, sea salt, baking soda, baking powder.",
      nutrition: "Nutrition per 80 g: 336 / 4 / 19.2 / 33.6",
      size: "80 g"
    },
    "banana-bread": {
      name: "Banana Bread",
      description: "Soft banana sponge with warm spices, peanuts and strawberry jam.",
      ingredients: "Bananas, wheat flour, white sugar, plant milk, vegetable oil, peanuts, apple puree, strawberry jam, flaxseed flour, cinnamon, baking powder, salt, spice blend, nutmeg, baking soda, vanillin.",
      nutrition: "Nutrition per 110 g: 347 / 5 / 14 / 51",
      size: "110 g"
    },
    "matcha-banana-bread": {
      name: "Matcha Banana Bread",
      description: "Soft, moist banana sponge with bright matcha, dark chocolate pieces and pear jam.",
      ingredients: "Bananas, wheat flour, sugar, soy milk, vegetable oil, dark chocolate, apple puree, pear-banana jam, psyllium, matcha, baking powder, salt, baking soda, vanillin.",
      nutrition: "Nutrition per 120 g: 333 / 4.2 / 12.9 / 50.0",
      size: "120 g"
    },
    "pink-velvet": {
      name: "Pink Velvet",
      description: "Velvety pink sponge with raspberry, blueberry, blackberry and blackcurrant berry sauce in a gentle cream-cheese style MUSSI mousse.",
      ingredients: "Pink sponge, berry sauce, MUSSI cream.",
      nutrition: "Nutrition per 100 g: 168.85 / 2.22 / 9.12 / 19.54",
      size: "100 g"
    },
    "kulich-mussi": {
      name: "MUSSI Kulich",
      description: "Extra-soft sweet bread with dried cranberries, cognac and orange-zest syrup, blue matcha mousse, blackcurrant confit, vanilla sugar glaze and handmade marshmallow.",
      ingredients: "Sweet bread, dried cranberries, cognac syrup, orange zest, blue matcha mousse, blackcurrant confit, sugar glaze, marshmallow.",
      nutrition: "Nutrition: 713.5 / 8.6 / 27 / 89",
      size: "1 pc."
    },
    "banoffee": {
      name: "Banoffee",
      description: "A special twist on banana pudding: bananas, salted coconut caramel, crisp cookie, caramel cream and dark chocolate.",
      ingredients: "Fresh banana, wheat flour, soy milk, coconut milk, plant cream, coconut flakes, margarine, sunflower oil, corn starch, sugar, dark chocolate, vinegar, salt, vanillin, baking powder, baking soda.",
      nutrition: "Nutrition per 100 g: 313.97 / 3.08 / 20.1 / 30.35",
      size: "100 g"
    },
    "strawberry-lemonade-pudding": {
      name: "Strawberry Lemonade Pudding",
      description: "Whipped plant cream, vanilla sponge, strawberry-cranberry compote, lemon curd, fresh strawberries and almond brittle.",
      ingredients: "Plant cream, vanilla sponge, plant milk, strawberry-cranberry compote, lemon curd, strawberries, almond brittle.",
      nutrition: "Nutrition: 228 / 2 / 12 / 28",
      size: "100 g"
    },
    "extra-choco-banana-bread": {
      name: "Extra Choco Banana Bread",
      description: "Extra-chocolate moist banana sponge with dark chocolate pieces, made for true chocolate lovers.",
      ingredients: "Banana sponge, dark chocolate.",
      nutrition: "Nutrition: 300 / 4 / 12 / 44",
      size: "180 g"
    },
    "hot-drinks": {
      name: "Hot Drinks",
      description: "Americano, latte, cappuccino, matcha latte, plant-cream raf, espresso tonic, black and green tea.",
      ingredients: "Signature Ethiopia beans, plant milk of choice: banana, soy, almond, coconut or oat. Toppings include vanilla, coconut, popcorn, caramel, chocolate, cinnamon, maple, pistachio, hazelnut, peanut butter, hemp halva, raspberry, peach, pear, lavender, banana, wild strawberry and more.",
      nutrition: "Americano: 9 / 0.6 / 0 / 0.7; cappuccino: 34 / 2 / 1.1 / 4; latte: 40 / 3 / 1.1 / 7; raf: 135 / 1 / 9.1 / 7",
      size: "your choice"
    },
    "classy-soda": {
      name: "Classy Soda",
      description: "Bright sparkling lemonades made with natural juices and extracts.",
      ingredients: "Flavours: Strawberry Lemongrass, Matcha Yuzu, Sedative Isotonic, Ginger Pear, Rosemary Pineapple, Tiger Cola, Yerba Mate.",
      nutrition: "330 ml",
      size: "330 ml"
    },
    "dubai-chocolate-latte": {
      name: "Dubai Chocolate Latte",
      description: "Aromatic latte with rich chocolate flavour and pistachio notes, topped with whipped chocolate cream and pistachios.",
      ingredients: "Coffee, chocolate, pistachio notes, chocolate cream, pistachios.",
      nutrition: "Nutrition per 100 ml: 98 / 1.2 / 5.0 / 11.0",
      size: "your choice"
    },
    "pickme-latte": {
      name: "Pick Me Latte",
      description: "A dazzling pink drink with soft whipped cream and fragrant raspberry syrup.",
      ingredients: "Coffee, plant cream, raspberry syrup.",
      nutrition: "Nutrition per 100 ml: 85 / 0.8 / 5 / 9",
      size: "your choice"
    }
  }
};

const FALLBACK_CATALOG = {
  categories: [
    { id: "puddings", title: "Пудинги" },
    { id: "bakery", title: "Выпечка" },
    { id: "specials", title: "Спешлы" },
    { id: "drinks", title: "Напитки" }
  ],
  products: [
    {
      id: "charlotte-popcorn",
      name: "Пудинг Шарлотка с попкорном",
      category: "puddings",
      description: "Яблоки с уютными пряностями и сладко-соленая воздушная кукуруза в попкорновом муссе.",
      ingredients: "Растительные сливки, соевое молоко, яблоки, яблочное пюре, пшеничная мука, попкорн, пряности.",
      nutrition: "КБЖУ 100 г: 186 / 2.6 / 10.2 / 20",
      price: null,
      size: "100 г",
      tags: ["plant based", "new", "pudding"],
      featured: true
    },
    {
      id: "banana-pudding",
      name: "Банановый пудинг",
      category: "puddings",
      description: "Банановый мусс, ванильный бисквит, свежий банан, кокосовое печенье и корица.",
      ingredients: "Банан, пшеничная мука, растительное молоко, растительные сливки, кокосовая стружка, корица.",
      nutrition: "КБЖУ 100 г: 181.5 / 1.8 / 9.2 / 22.9",
      price: null,
      size: "100 г",
      tags: ["plant based", "bestseller", "pudding"],
      featured: true
    },
    {
      id: "chocolate-brownie-pudding",
      name: "Шоколадный пудинг с соленым брауни",
      category: "puddings",
      description: "Шоколадный мусс с темным шоколадом, кофейной пропиткой, соленым брауни и крошкой орео.",
      ingredients: "Горький шоколад, банан, соевое молоко, кокосовое молоко, растительные сливки, какао, кофе.",
      nutrition: "КБЖУ 100 г: 284.9 / 3.2 / 18.6 / 26.4",
      price: null,
      size: "100 г",
      tags: ["plant based", "chocolate", "pudding"],
      featured: true
    },
    {
      id: "trio-set",
      name: "Сет из трех вкусов",
      category: "puddings",
      description: "Ассорти из трех мини-пудингов: банановый, шоколадный с соленым брауни и шарлотка с попкорном.",
      ingredients: "Ассорти из трех мини-пудингов.",
      nutrition: "КБЖУ зависит от вкусов в наборе",
      price: 750,
      size: "3 мини-пудинга",
      tags: ["plant based", "set", "bestseller"],
      featured: true
    },
    {
      id: "cherry-pie",
      name: "Вишневый пирог с овсяно-миндальной крошкой",
      category: "bakery",
      description: "Коржик, сочная кислая вишня с лимоном и овсяно-миндальная крошка.",
      ingredients: "Пшеничная мука, вишня, маргарин, сахар, овсяные хлопья, миндаль, лимон.",
      nutrition: "КБЖУ 180 г: 408 / 5 / 16 / 61",
      warning: "В редких случаях могут попадаться фрагменты косточек вишни.",
      price: null,
      size: "180 г",
      tags: ["plant based", "bakery"]
    },
    {
      id: "chocolate-cookie",
      name: "Шоколадное печенье",
      category: "bakery",
      description: "Шоколадное фадж-печенье с цельным жареным фундуком и хлопьями морской соли.",
      ingredients: "Горький шоколад, маргарин, сахар, соевое молоко, пшеничная мука, какао, фундук.",
      nutrition: "КБЖУ 80 г: 336 / 4 / 19.2 / 33.6",
      price: null,
      size: "80 г",
      tags: ["plant based", "chocolate", "nuts"]
    },
    {
      id: "banana-bread",
      name: "Банановый хлеб",
      category: "bakery",
      description: "Мягкий банановый бисквит с пряными специями, арахисом и клубничным джемом.",
      ingredients: "Бананы, пшеничная мука, растительное молоко, арахис, яблочное пюре, клубничный джем.",
      nutrition: "КБЖУ 110 г: 347 / 5 / 14 / 51",
      price: null,
      size: "110 г",
      tags: ["plant based", "bakery", "nuts"]
    },
    {
      id: "matcha-banana-bread",
      name: "Матча банановый хлеб",
      category: "bakery",
      description: "Банановый бисквит с терпкой матчей, горьким шоколадом и грушевым джемом.",
      ingredients: "Бананы, пшеничная мука, соевое молоко, горький шоколад, грушевый джем, матча.",
      nutrition: "КБЖУ 120 г: 333 / 4.2 / 12.9 / 50.0",
      price: null,
      size: "120 г",
      tags: ["plant based", "matcha", "bakery"]
    },
    {
      id: "pink-velvet",
      name: "Розовый бархат",
      category: "specials",
      description: "Розовый бисквит с ягодным соусом из малины, черники, ежевики и смородины.",
      ingredients: "Розовый бисквит, ягодный соус, муссиевый крем.",
      nutrition: "КБЖУ 100 г: 168.85 / 2.22 / 9.12 / 19.54",
      price: null,
      size: "100 г",
      tags: ["plant based", "seasonal", "special"]
    },
    {
      id: "strawberry-lemonade-pudding",
      name: "Пудинг Клубничный лимонад",
      category: "specials",
      description: "Ванильный бисквит, клубнично-клюквенный компот, лимонный курд, клубника и миндальный грильяж.",
      ingredients: "Растительные сливки, ванильный бисквит, клубнично-клюквенный компот, лимонный курд, миндаль.",
      nutrition: "КБЖУ: 228 / 2 / 12 / 28",
      price: 320,
      size: "100 г",
      tags: ["plant based", "seasonal", "pudding", "nuts"]
    },
    {
      id: "extra-choco-banana-bread",
      name: "Extra Choco Banana Bread",
      category: "specials",
      description: "Экстра шоколадный влажный банановый бисквит с кусочками горького шоколада.",
      ingredients: "Банановый бисквит, горький шоколад.",
      nutrition: "КБЖУ: 300 / 4 / 12 / 44",
      price: 450,
      size: "180 г",
      tags: ["plant based", "seasonal", "chocolate", "bakery"]
    },
    {
      id: "hot-drinks",
      name: "Горячие напитки",
      category: "drinks",
      description: "Американо, латте, капучино, матча-латте, раф на растительных сливках, эспрессо-тоник и чай.",
      ingredients: "Фирменные зерна Эфиопия, растительное молоко и топпинги на выбор.",
      nutrition: "Американо, капучино, латте и раф с КБЖУ из меню.",
      price: null,
      size: "на выбор",
      tags: ["plant based", "coffee", "drink"]
    },
    {
      id: "classy-soda",
      name: "Classy Soda",
      category: "drinks",
      description: "Газированные лимонады на натуральной основе из соков и экстрактов.",
      ingredients: "Strawberry Lemongrass, Matcha Yuzu, Sedative Isotonic, Ginger Pear, Rosemary Pineapple, Tiger Cola, Yerba Mate.",
      nutrition: "330 мл",
      price: 280,
      size: "330 мл",
      tags: ["plant based", "drink", "soda"]
    }
  ]
};

const state = {
  catalog: FALLBACK_CATALOG,
  language: loadLanguage(),
  filters: {
    category: "all",
    tag: null,
    query: ""
  },
  cart: {},
  productSelections: {},
  promoPreview: null,
  promoTimer: null,
  orders: [],
  currentOrder: null
};

const selectors = {
  header: document.querySelector("[data-header]"),
  specialsGrid: document.querySelector("[data-specials-grid]"),
  productGrid: document.querySelector("[data-product-grid]"),
  categoryFilters: document.querySelector("[data-category-filters]"),
  search: document.querySelector("[data-search]"),
  resetFilters: document.querySelector("[data-reset-filters]"),
  resultCount: document.querySelector("[data-result-count]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  promoStatus: document.querySelector("[data-promo-status]"),
  cartCount: document.querySelector("[data-cart-count]"),
  cartNote: document.querySelector("[data-cart-note]"),
  orderStatus: document.querySelector("[data-order-status]"),
  orderHistory: document.querySelector("[data-order-history]"),
  cartTabs: document.querySelectorAll("[data-cart-tab]"),
  cartPanes: document.querySelectorAll("[data-cart-pane]"),
  languageToggle: document.querySelector("[data-language-toggle]"),
  miniCart: document.querySelector("[data-mini-cart]"),
  checkoutForm: document.querySelector("[data-checkout-form]"),
  checkoutSubmit: document.querySelector("[data-checkout-submit]"),
  checkoutHint: document.querySelector("[data-checkout-hint]"),
  pickupPreview: document.querySelector("[data-pickup-preview]"),
  repeatOrder: document.querySelector("[data-repeat-order]"),
  toast: document.querySelector("[data-toast]")
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  await loadCatalog();
  loadCart();
  loadOrderHistory();
  applyLanguage();
  renderCategoryFilters();
  renderSpecials();
  renderProducts();
  renderCart();
  renderOrderStatus(state.currentOrder);
  renderOrderHistory();
  updateHeaderState();
  bindEvents();
  connectMenuEvents();
  connectOrderEvents();
  startMenuAutoSync();
  startOrderAutoSync();
}

async function loadCatalog() {
  try {
    state.catalog = await requestJson(CONFIG.menuUrl);
  } catch (error) {
    try {
      const response = await fetch(CONFIG.menuFallbackUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Menu fallback failed: ${response.status}`);
      }
      state.catalog = await response.json();
    } catch (fallbackError) {
      console.info("Using embedded MUSSI menu data.", error, fallbackError);
    }
  }
}

function loadLanguage() {
  const saved = localStorage.getItem(CONFIG.languageStorageKey);
  return saved === "en" ? "en" : "ru";
}

function setLanguage(language) {
  if (!I18N[language] || state.language === language) return;

  state.language = language;
  localStorage.setItem(CONFIG.languageStorageKey, language);
  applyLanguage();
  renderCategoryFilters();
  renderSpecials();
  renderProducts();
  renderCart();
  renderOrderStatus(state.currentOrder);
  renderOrderHistory();
}

function t(key) {
  return I18N[state.language]?.[key] || I18N.ru[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nLabel));
  });

  selectors.languageToggle?.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  updatePickupPreview();
}

function bindEvents() {
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  selectors.languageToggle?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button) return;
    setLanguage(button.dataset.lang);
  });

  selectors.cartTabs.forEach((button) => {
    button.addEventListener("click", () => switchCartTab(button.dataset.cartTab));
  });

  selectors.search.addEventListener("input", (event) => {
    state.filters.query = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  selectors.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    state.filters.category = button.dataset.categoryFilter;
    renderProducts();
    renderCategoryFilters();
  });

  document.querySelectorAll("[data-tag-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTag = button.dataset.tagFilter;
      state.filters.tag = state.filters.tag === nextTag ? null : nextTag;
      document.querySelectorAll("[data-tag-filter]").forEach((tagButton) => {
        tagButton.classList.toggle("is-active", tagButton.dataset.tagFilter === state.filters.tag);
      });
      renderProducts();
    });
  });

  selectors.resetFilters.addEventListener("click", resetFilters);

  selectors.productGrid.addEventListener("click", (event) => {
    handleProductCartControlClick(event);
  });
  selectors.productGrid.addEventListener("change", handleProductChoiceChange);

  selectors.specialsGrid?.addEventListener("click", (event) => {
    handleProductCartControlClick(event);
  });
  selectors.specialsGrid?.addEventListener("change", handleProductChoiceChange);

  document.querySelectorAll("[data-cart-open]").forEach((button) => {
    button.addEventListener("click", openCart);
  });

  document.querySelectorAll("[data-cart-close]").forEach((button) => {
    button.addEventListener("click", closeCart);
  });

  selectors.cartItems.addEventListener("click", (event) => {
    const control = event.target.closest("[data-cart-action]");
    if (!control) return;
    updateCartQuantity(control.dataset.productId, control.dataset.cartAction, control.dataset.cartKey);
  });

  selectors.checkoutForm.addEventListener("submit", handleCheckout);
  selectors.checkoutForm.elements.name?.addEventListener("input", updateCheckoutState);
  selectors.checkoutForm.elements.contact?.addEventListener("input", updateCheckoutState);
  selectors.checkoutForm.elements.pickupDate?.addEventListener("input", onPickupSlotInput);
  selectors.checkoutForm.elements.pickupDate?.addEventListener("change", onPickupSlotChange);
  selectors.checkoutForm.elements.pickupClock?.addEventListener("input", onPickupSlotInput);
  selectors.checkoutForm.elements.pickupClock?.addEventListener("change", onPickupSlotChange);
  initPickupSlotDefaults();
  selectors.checkoutForm.elements.promo?.addEventListener("input", () => {
    window.clearTimeout(state.promoTimer);
    state.promoTimer = window.setTimeout(refreshPromoPreview, 300);
  });
  selectors.repeatOrder.addEventListener("click", repeatLastOrder);
  selectors.orderStatus.addEventListener("click", handleOrderActionClick);
  selectors.orderHistory.addEventListener("click", handleOrderActionClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
    }
  });
}

function updateHeaderState() {
  selectors.header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

function renderCategoryFilters() {
  const categories = [{ id: "all", title: t("category.all") }, ...state.catalog.categories];
  selectors.categoryFilters.innerHTML = categories
    .map((category) => {
      const isActive = state.filters.category === category.id;
      const title = category.id === "all" ? category.title : getCategoryTitle(category.id);
      return `<button class="chip ${isActive ? "is-active" : ""}" type="button" data-category-filter="${escapeHtml(category.id)}">${escapeHtml(title)}</button>`;
    })
    .join("");
}

function renderProducts() {
  const products = getFilteredProducts();
  selectors.resultCount.textContent = formatCount(products.length);

  if (!products.length) {
    selectors.productGrid.innerHTML = `
      <article class="product-card">
        <h3>${t("empty.title")}</h3>
        <p>${t("empty.text")}</p>
        <button class="button button--primary" type="button" data-empty-reset>${t("menu.reset")}</button>
      </article>
    `;
    selectors.productGrid.querySelector("[data-empty-reset]").addEventListener("click", resetFilters);
    return;
  }

  selectors.productGrid.innerHTML = products.map(renderProductCard).join("");
}

function renderSpecials() {
  if (!selectors.specialsGrid) return;

  const specials = getSpecialProducts().slice(0, 4);
  if (!specials.length) {
    selectors.specialsGrid.innerHTML = `
      <article class="specials-empty">
        <strong>${t("specials.empty.title")}</strong>
        <p>${t("specials.empty.text")}</p>
      </article>
    `;
    return;
  }

  selectors.specialsGrid.innerHTML = specials.map(renderSpecialCard).join("");
}

function renderSpecialCard(product) {
  const displayProduct = localizeProduct(product);
  return `
    <article class="special-card">
      <div class="special-card__media ${product.image ? "has-image" : ""}" data-category="${escapeHtml(product.category)}" aria-hidden="true">
        ${renderProductImage(product, "special-card__image")}
      </div>
      <div class="special-card__content">
        <span>${escapeHtml(getCategoryTitle(product.category))}</span>
        <h3>${escapeHtml(displayProduct.name)}</h3>
        <p>${escapeHtml(displayProduct.description)}</p>
        <div class="special-card__footer">
          <strong>${formatPrice(product.price)}</strong>
          ${renderProductCartControl(product)}
        </div>
      </div>
    </article>
  `;
}

function getSpecialProducts() {
  return state.catalog.products.filter((product) => {
    const tags = product.tags || [];
    return product.available !== false && (product.isSpecial || product.category === "specials" || tags.includes("seasonal") || tags.includes("special"));
  });
}

function renderProductCard(product) {
  const displayProduct = localizeProduct(product);
  const category = getCategoryTitle(product.category);
  const price = getDisplayUnitPrice(product);
  const tags = [
    product.featured ? "hit" : null,
    product.isSpecial ? "special" : null,
    ...(product.tags || []).filter((tag) => tag !== "plant based")
  ].filter(Boolean);

  return `
    <article class="product-card" data-product-card data-product-id="${escapeHtml(product.id)}">
      <div class="product-card__art ${product.image ? "has-image" : ""}" data-category="${escapeHtml(product.category)}" data-category-label="${escapeHtml(category)}" aria-hidden="true">
        ${renderProductImage(product, "product-card__image")}
      </div>
      <div class="product-card__top">
        <div>
          <p class="eyebrow">${escapeHtml(category)} · ${escapeHtml(displayProduct.size || fallbackPortion())}</p>
          <h3 class="product-card__title">${escapeHtml(displayProduct.name)}</h3>
        </div>
        <span class="product-card__price">${formatPrice(price)}</span>
      </div>
      <p class="product-card__desc">${escapeHtml(displayProduct.description)}</p>
      <div class="product-card__tags">
        <span class="tag">plant based</span>
        ${tags.map((tag) => `<span class="tag">${escapeHtml(normalizeTag(tag))}</span>`).join("")}
      </div>
      <div class="product-card__details">
        <details>
          <summary>${t("product.ingredients")}</summary>
          <p>${escapeHtml(displayProduct.ingredients || t("product.priceUnknown"))}</p>
        </details>
        <details>
          <summary>${t("product.nutrition")}</summary>
          <p>${escapeHtml(displayProduct.nutrition || t("product.priceUnknown"))}</p>
        </details>
        ${displayProduct.warning ? `<div class="product-card__warning">${escapeHtml(displayProduct.warning)}</div>` : ""}
      </div>
      ${renderProductChoices(product)}
      ${renderProductCartControl(product, true)}
    </article>
  `;
}

function renderProductChoices(product) {
  const hasVariants = Array.isArray(product.variants) && product.variants.length > 1;
  const groups = Array.isArray(product.optionGroups) ? product.optionGroups : [];
  if (!hasVariants && !groups.length) return "";
  const selection = getProductSelection(product);

  const variantSelect = hasVariants
    ? `
      <label class="product-choice">
        <span>Порция</span>
        <select data-product-variant="${escapeHtml(product.id)}">
          ${product.variants.map((variant) => `
            <option value="${escapeHtml(variant.id)}" ${variant.id === selection.variantId ? "selected" : ""}>${escapeHtml(formatVariantLabel(variant))}</option>
          `).join("")}
        </select>
      </label>
    `
    : "";

  const optionGroups = groups.map((group) => {
    const options = Array.isArray(group.options) ? group.options : [];
    if (!options.length) return "";

    if (group.type === "multi") {
      return `
        <fieldset class="product-choice product-choice--checks" data-product-option-group="${escapeHtml(group.id)}" data-option-type="multi">
          <legend>${escapeHtml(group.label || "Опции")}</legend>
          ${options.map((option) => `
            <label>
              <input type="checkbox" value="${escapeHtml(option.id)}" ${(selection.optionIds[group.id] || []).includes(option.id) ? "checked" : ""}>
              <span>${escapeHtml(formatOptionLabel(option))}</span>
            </label>
          `).join("")}
        </fieldset>
      `;
    }

    return `
      <label class="product-choice" data-product-option-group="${escapeHtml(group.id)}" data-option-type="single">
        <span>${escapeHtml(group.label || "Опция")}</span>
        <select>
          ${options.map((option) => `
            <option value="${escapeHtml(option.id)}" ${selection.optionIds[group.id] === option.id ? "selected" : ""}>${escapeHtml(formatOptionLabel(option))}</option>
          `).join("")}
        </select>
      </label>
    `;
  }).join("");

  return `<div class="product-choices">${variantSelect}${optionGroups}</div>`;
}

function renderProductCartControl(product, isFull = false) {
  const selection = getProductSelection(product);
  const cartKey = createCartKey(product.id, selection.variantId, selection.optionIds);
  const quantity = state.cart[cartKey]?.quantity || state.cart[product.id] || 0;
  const productId = escapeHtml(product.id);
  const fullClass = isFull ? " product-cart-control--full" : "";

  if (!quantity) {
    return `
      <button class="button button--primary ${isFull ? "button--full" : ""}" type="button" data-product-cart-action="add" data-product-id="${productId}">
        ${t("product.add")}
      </button>
    `;
  }

  const displayProduct = localizeProduct(product);
  return `
    <div class="product-cart-control${fullClass}" data-product-cart-control>
      <span>${t("product.added")}</span>
      <div class="product-cart-stepper" aria-label="${t("cart.quantity")} ${escapeHtml(displayProduct.name)}">
        <button type="button" data-product-cart-action="decrease" data-product-id="${productId}" data-cart-key="${escapeHtml(cartKey)}" aria-label="${t("cart.decrease")}">−</button>
        <strong>${quantity}</strong>
        <button type="button" data-product-cart-action="increase" data-product-id="${productId}" data-cart-key="${escapeHtml(cartKey)}" aria-label="${t("cart.increase")}">+</button>
      </div>
    </div>
  `;
}

function getFilteredProducts() {
  return state.catalog.products.filter((product) => {
    if (product.available === false) {
      return false;
    }

    const matchesCategory = state.filters.category === "all" || product.category === state.filters.category;
    const displayProduct = localizeProduct(product);
    const variantText = (product.variants || []).map((variant) => `${variant.label} ${variant.size}`).join(" ");
    const optionText = (product.optionGroups || []).flatMap((group) => [group.label, ...(group.options || []).map((option) => option.label)]).join(" ");
    const searchableText = `${product.name} ${product.description} ${product.ingredients} ${displayProduct.name} ${displayProduct.description} ${displayProduct.ingredients} ${variantText} ${optionText} ${(product.tags || []).join(" ")}`.toLowerCase();
    const matchesQuery = !state.filters.query || searchableText.includes(state.filters.query);
    const matchesTag =
      !state.filters.tag ||
      product.tags?.includes(state.filters.tag) ||
      (state.filters.tag === "seasonal" && product.isSpecial) ||
      (state.filters.tag === "featured" && product.featured);

    return matchesCategory && matchesQuery && matchesTag;
  });
}

function resetFilters() {
  state.filters = { category: "all", tag: null, query: "" };
  selectors.search.value = "";
  document.querySelectorAll("[data-tag-filter]").forEach((button) => button.classList.remove("is-active"));
  renderCategoryFilters();
  renderSpecials();
  renderProducts();
}

function handleProductCartControlClick(event) {
  const control = event.target.closest("[data-product-cart-action]");
  if (!control) return;

  updateCartQuantity(control.dataset.productId, control.dataset.productCartAction, control.dataset.cartKey, control);
}

function handleProductChoiceChange(event) {
  const card = event.target.closest("[data-product-card]");
  const productId = card?.dataset.productId;
  if (!productId) return;

  const product = state.catalog.products.find((candidate) => candidate.id === productId);
  if (!product) return;

  updateProductSelectionFromCard(product, card);
  renderSpecials();
  renderProducts();
}

function addToCart(productId) {
  updateCartQuantity(productId, "add");
  showToast(t("toast.added"));
}

function updateCartQuantity(productId, action, cartKey = "", sourceElement = null) {
  const item = resolveCartItem(productId, cartKey, sourceElement);
  if (!item) return;

  const key = item.cartKey;

  if (action === "add" || action === "increase") {
    state.cart[key] = state.cart[key] || {
      productId: item.productId,
      variantId: item.variantId || "",
      optionIds: item.optionIds || {},
      quantity: 0
    };
    state.cart[key].quantity += 1;
  }

  if (action === "decrease") {
    if (!state.cart[key]) return;
    state.cart[key].quantity -= 1;
  }

  if (action === "remove") {
    if (!state.cart[key]) return;
    delete state.cart[key];
  }

  if (state.cart[key]?.quantity <= 0) {
    delete state.cart[key];
  }

  saveCart();
  state.promoPreview = null;
  renderSpecials();
  renderProducts();
  renderCart();
  refreshPromoPreview();
}

function renderCart() {
  const entries = getCartEntries();
  const count = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const knownTotal = entries.reduce((sum, entry) => sum + (entry.lineTotal || 0), 0);
  const hasUnknownPrice = entries.some((entry) => entry.unitPrice === null || entry.unitPrice === undefined);
  const promo = getActivePromoPreview(knownTotal);
  const totalDue = promo ? promo.totalDue : knownTotal;

  selectors.cartCount.textContent = count;
  selectors.cartTotal.textContent = entries.length ? `${totalDue.toLocaleString("ru-RU")} ₽${hasUnknownPrice ? ` ${t("cart.unknownPlus")}` : ""}` : "0 ₽";
  selectors.cartNote.textContent = hasUnknownPrice
    ? t("cart.note.unknown")
    : t("cart.note.default");

  selectors.cartItems.innerHTML = entries.length
    ? entries.map(renderCartItem).join("")
    : `<p class="muted">${t("cart.empty")}</p>`;

  refreshPickupSlotUI();
  updateCheckoutState();
  renderPromoStatus(knownTotal);

  renderMiniCart(entries, totalDue, hasUnknownPrice);
}

function renderPromoStatus(subtotal = null) {
  if (!selectors.promoStatus) return;

  const code = selectors.checkoutForm.elements.promo?.value.trim() || "";
  if (!code) {
    selectors.promoStatus.textContent = t("promo.empty");
    selectors.promoStatus.dataset.state = "idle";
    return;
  }

  if (isStaticPublicHost()) {
    selectors.promoStatus.textContent = t("promo.staticHost");
    selectors.promoStatus.dataset.state = "idle";
    return;
  }

  const promo = getActivePromoPreview(subtotal);
  if (promo) {
    selectors.promoStatus.textContent = t("promo.applied")
      .replace("{percent}", promo.discountPercent)
      .replace("{amount}", promo.discountAmount.toLocaleString("ru-RU"));
    selectors.promoStatus.dataset.state = "valid";
    return;
  }

  if (state.promoPreview?.code === normalizePromoCode(code) && state.promoPreview.valid === false) {
    selectors.promoStatus.textContent = t(state.promoPreview.message === "check_failed" ? "promo.checkFailed" : "promo.notFound");
    selectors.promoStatus.dataset.state = "invalid";
    return;
  }

  selectors.promoStatus.textContent = t("promo.empty");
  selectors.promoStatus.dataset.state = "idle";
}

function getActivePromoPreview(subtotal = null) {
  const code = normalizePromoCode(selectors.checkoutForm.elements.promo?.value || "");
  if (!code || !state.promoPreview?.valid || state.promoPreview.code !== code) return null;
  if (subtotal !== null && state.promoPreview.subtotal !== subtotal) return null;
  return state.promoPreview;
}

async function refreshPromoPreview() {
  const code = selectors.checkoutForm.elements.promo?.value.trim() || "";
  const entries = getCartEntries();
  if (!code || !entries.length || window.location.protocol === "file:" || isStaticPublicHost()) {
    state.promoPreview = null;
    renderCart();
    return;
  }

  try {
    state.promoPreview = await requestJson(CONFIG.promoPreviewUrl, {
      method: "POST",
      body: JSON.stringify({ code, cart: state.cart })
    });
  } catch (error) {
    state.promoPreview = {
      code: normalizePromoCode(code),
      valid: false,
      message: "check_failed"
    };
  }

  renderCart();
}

function updateCheckoutState() {
  const count = getCartEntries().reduce((sum, entry) => sum + entry.quantity, 0);
  const hasName = Boolean(selectors.checkoutForm.elements.name?.value.trim());
  const rawPhone = selectors.checkoutForm.elements.contact?.value || "";
  const hasPhone = Boolean(rawPhone.trim());
  const hasValidPhone = Boolean(normalizePhoneNumber(rawPhone));
  const rawPickupIso = getCombinedPickupIso();
  const hasPickupSlot = Boolean(rawPickupIso);
  const pickupErrorKey = hasPickupSlot ? validatePickupTime(rawPickupIso) : null;
  const isDisabled =
    isStaticPublicHost() ||
    count === 0 ||
    !hasName ||
    !hasValidPhone ||
    !hasPickupSlot ||
    Boolean(pickupErrorKey);

  if (selectors.checkoutSubmit) {
    selectors.checkoutSubmit.disabled = isDisabled;
    selectors.checkoutSubmit.setAttribute("aria-disabled", String(isDisabled));
  }

  if (!selectors.checkoutHint) return;

  let hintKey;
  if (count === 0) {
    hintKey = "checkout.hint.empty";
  } else if (isStaticPublicHost()) {
    hintKey = "checkout.hint.staticHost";
  } else if (!hasValidPhone) {
    hintKey = hasPhone ? "checkout.hint.invalidPhone" : "checkout.hint.phone";
  } else if (!hasPickupSlot) {
    hintKey = "checkout.hint.pickupTime";
  } else if (pickupErrorKey) {
    hintKey = pickupErrorKey;
  } else {
    hintKey = "checkout.hint.ready";
  }
  selectors.checkoutHint.textContent = t(hintKey);
  selectors.checkoutHint.dataset.state = isDisabled ? "blocked" : "ready";
  updatePickupPreview();
}

function renderCartItem(entry) {
  const { product, quantity } = entry;
  const displayProduct = localizeProduct(product);
  const lineTotal = entry.lineTotal === null ? t("product.priceUnknown") : `${entry.lineTotal.toLocaleString("ru-RU")} ₽`;
  return `
    <article class="cart-item">
      <div class="cart-item__media ${product.image ? "has-image" : ""}" data-category="${escapeHtml(product.category)}" aria-hidden="true">
        ${renderProductImage(product, "cart-item__image")}
      </div>
      <div class="cart-item__main">
        <div class="cart-item__title-row">
          <strong>${escapeHtml(displayProduct.name)}</strong>
          <span>${lineTotal}</span>
        </div>
        <small>${escapeHtml(formatEntryDetails(entry))} · ${formatPrice(entry.unitPrice)}</small>
        <div class="cart-item__actions">
          <div class="quantity-control" aria-label="${t("cart.quantity")} ${escapeHtml(displayProduct.name)}">
            <button type="button" data-cart-action="decrease" data-cart-key="${escapeHtml(entry.cartKey)}" data-product-id="${escapeHtml(product.id)}" aria-label="${t("cart.decrease")}">−</button>
            <strong>${quantity}</strong>
            <button type="button" data-cart-action="increase" data-cart-key="${escapeHtml(entry.cartKey)}" data-product-id="${escapeHtml(product.id)}" aria-label="${t("cart.increase")}">+</button>
          </div>
          <button class="text-button" type="button" data-cart-action="remove" data-cart-key="${escapeHtml(entry.cartKey)}" data-product-id="${escapeHtml(product.id)}">${t("cart.remove")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderMiniCart(entries, knownTotal, hasUnknownPrice) {
  if (!entries.length) {
    selectors.miniCart.innerHTML = `
      <strong>${t("mini.empty.title")}</strong>
      <p>${t("mini.empty.text")}</p>
    `;
    return;
  }

  const names = entries
    .slice(0, 3)
    .map((entry) => `${entry.quantity} × ${localizeProduct(entry.product).name} (${formatEntryDetails(entry)})`)
    .join(", ");
  const previews = entries
    .slice(0, 3)
    .map((entry) => `
      <span class="mini-cart-preview__image ${entry.product.image ? "has-image" : ""}" data-category="${escapeHtml(entry.product.category)}">
        ${renderProductImage(entry.product, "mini-cart-preview__img")}
      </span>
    `)
    .join("");

  selectors.miniCart.innerHTML = `
    <div class="mini-cart-preview__images" aria-hidden="true">${previews}</div>
    <strong>${formatCount(entries.reduce((sum, entry) => sum + entry.quantity, 0))} ${t("cart.countSuffix")}</strong>
    <p>${escapeHtml(names)}${entries.length > 3 ? "..." : ""}</p>
    <p>${t("cart.totalKnown")}: ${knownTotal.toLocaleString("ru-RU")} ₽${hasUnknownPrice ? ` ${t("cart.unknownPlus")}` : ""}</p>
    <button class="button button--primary" type="button" data-cart-open>${t("cart.openButton")}</button>
  `;

  selectors.miniCart.querySelector("[data-cart-open]").addEventListener("click", openCart);
}

function renderProductImage(product, className) {
  if (!product.image) return "";

  return `<img class="${className}" src="${escapeHtml(product.image)}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.classList.remove('has-image'); this.remove();">`;
}

function openCart() {
  selectors.cartDrawer.classList.add("is-open");
  selectors.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
  refreshPickupSlotUI();
}

function closeCart() {
  selectors.cartDrawer.classList.remove("is-open");
  selectors.cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function switchCartTab(tabName = "cart") {
  selectors.cartTabs.forEach((button) => {
    const isActive = button.dataset.cartTab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  selectors.cartPanes.forEach((pane) => {
    const isActive = pane.dataset.cartPane === tabName;
    pane.classList.toggle("is-active", isActive);
    pane.hidden = !isActive;
  });
}

async function handleCheckout(event) {
  event.preventDefault();

  if (isStaticPublicHost()) {
    showToast(t("toast.staticHostCheckout"));
    return;
  }

  const entries = getCartEntries();
  if (!entries.length) {
    showToast(t("toast.emptyCart"));
    return;
  }

  const formData = new FormData(selectors.checkoutForm);
  const nameInput = selectors.checkoutForm.elements.name;
  const name = formData.get("name")?.trim() || "";
  if (!name) {
    nameInput?.setCustomValidity(t("orders.nameRequired"));
    selectors.checkoutForm.reportValidity();
    nameInput?.setCustomValidity("");
    showToast(t("orders.nameRequired"));
    return;
  }

  const contactInput = selectors.checkoutForm.elements.contact;
  const contact = normalizePhoneNumber(formData.get("contact"));
  if (!contact) {
    contactInput?.setCustomValidity(t("orders.phoneInvalid"));
    selectors.checkoutForm.reportValidity();
    contactInput?.setCustomValidity("");
    showToast(t(formData.get("contact")?.trim() ? "orders.phoneInvalid" : "orders.contactRequired"));
    return;
  }

  if (contactInput) {
    contactInput.value = contact;
  }

  const pickupDateInput = selectors.checkoutForm.elements.pickupDate;
  const pickupClockInput = selectors.checkoutForm.elements.pickupClock;
  const pickupTime = getCombinedPickupIso();
  if (!pickupTime) {
    pickupDateInput?.setCustomValidity(t("orders.pickupTimeRequired"));
    pickupClockInput?.setCustomValidity(t("orders.pickupTimeRequired"));
    selectors.checkoutForm.reportValidity();
    pickupDateInput?.setCustomValidity("");
    pickupClockInput?.setCustomValidity("");
    showToast(t("orders.pickupTimeRequired"));
    return;
  }

  const pickupErrorKey = validatePickupTime(pickupTime);
  if (pickupErrorKey) {
    pickupClockInput?.setCustomValidity(t(pickupErrorKey));
    selectors.checkoutForm.reportValidity();
    pickupClockInput?.setCustomValidity("");
    showToast(t(pickupErrorKey));
    return;
  }

  const order = {
    createdAt: new Date().toISOString(),
    customer: {
      name,
      contact,
      pickupTime,
      comment: formData.get("comment")?.trim() || "",
      promo: formData.get("promo")?.trim() || ""
    },
    cart: state.cart
  };

  try {
    const createdOrder = await requestJson(CONFIG.ordersUrl, {
      method: "POST",
      body: JSON.stringify(order)
    });

    state.currentOrder = createdOrder;
    state.cart = {};
    saveCart();
    upsertOrderHistory(createdOrder);
    localStorage.setItem(CONFIG.lastOrderStorageKey, JSON.stringify(order));
    selectors.checkoutForm.reset();
    initPickupSlotDefaults();
    renderCart();
    renderOrderStatus(createdOrder);
    renderOrderHistory();
    switchCartTab("orders");
    showToast(t("toast.orderCreated"));
  } catch (error) {
    const serverPickupError = mapServerErrorToHint(error?.message);
    showToast(t(serverPickupError || "toast.orderCreateFailed"));
    console.error(error);
  }
}

function mapServerErrorToHint(code) {
  const map = {
    PICKUP_TIME_REQUIRED: "orders.pickupTimeRequired",
    PICKUP_TIME_INVALID: "orders.pickupTimeInvalid",
    PICKUP_TIME_PAST: "orders.pickupTimePast",
    PICKUP_TIME_HOURS: "orders.pickupTimeHours",
    PICKUP_TIME_FAR: "orders.pickupTimeFar"
  };
  return map[code] || null;
}

async function mockPayOrder(orderId) {
  if (isStaticPublicHost()) {
    showToast(t("toast.staticHostCheckout"));
    return;
  }

  try {
    const paidOrder = await requestJson(`${CONFIG.ordersUrl}/${orderId}/mock-pay`, {
      method: "POST"
    });

    state.currentOrder = paidOrder;
    state.cart = {};
    saveCart();
    renderCart();
    renderOrderStatus(paidOrder);
    showToast(
      paidOrder.pickupCode
        ? t("toast.orderAcceptedWithCode").replace("{code}", paidOrder.pickupCode)
        : t("toast.paid")
    );
  } catch (error) {
    if (error?.message === "MOCK_PAY_DISABLED") {
      showToast(t("toast.mockPayDisabled"));
    } else {
      showToast(t("toast.payFailed"));
    }
    console.error(error);
  }
}

function renderOrderStatus(order) {
  if (!order) {
    selectors.orderStatus.hidden = true;
    selectors.orderStatus.innerHTML = "";
    return;
  }

  selectors.orderStatus.hidden = false;
  const status = order.status || "new";
  selectors.orderStatus.innerHTML = `
    <div class="order-status__top">
      <strong>${orderStatusLabel(status)}</strong>
      <span>${escapeHtml(order.orderNumber || order.id)}</span>
    </div>
    ${order.pickupCode ? `
    <div class="order-pickup-code">
      <span class="order-pickup-code__label">${escapeHtml(t("orders.pickupCode"))}</span>
      <span class="order-pickup-code__digits">${escapeHtml(order.pickupCode)}</span>
    </div>` : ""}
    <p>${order.knownTotal.toLocaleString("ru-RU")} ₽${order.hasUnknownPrice ? " + уточнение" : ""}</p>
    ${orderDiscountMarkup(order, "p")}
    ${order.customer?.pickupTime ? `<p><b>${t("orders.pickupTime")}:</b> ${escapeHtml(formatPickupTime(order.customer.pickupTime))}</p>` : ""}
    ${order.eta ? `<p><b>${t("orders.eta")}:</b> ${escapeHtml(order.eta)}</p>` : ""}
    ${order.cancelReason ? `<p><b>${t("orders.cancelReason")}:</b> ${escapeHtml(order.cancelReason)}</p>` : ""}
    <p>${orderStatusMessage(order)}</p>
    ${isActiveOrder(order) ? renderSuggestionBox(order) : ""}
    ${order.items?.length ? `<button class="button button--primary button--full" type="button" data-repeat-order-id="${escapeHtml(order.id)}">${t("orders.repeat")}</button>` : ""}
  `;
}

function renderOrderHistory() {
  if (!selectors.orderHistory) return;

  if (!state.orders.length) {
    selectors.orderHistory.innerHTML = `<p class="muted">${t("orders.empty")}</p>`;
    return;
  }

  const activeOrder = state.orders.find((order) => !["done", "cancelled"].includes(order.status));
  const recentOrders = state.orders.slice(0, 5);

  selectors.orderHistory.innerHTML = `
    ${activeOrder ? `
      <section class="order-history__section">
        <p class="eyebrow">${t("orders.active")}</p>
        ${renderOrderHistoryCard(activeOrder, true)}
      </section>
    ` : ""}
    <section class="order-history__section">
      <p class="eyebrow">${t("orders.recent")}</p>
      ${recentOrders.length ? recentOrders.map((order) => renderOrderHistoryCard(order)).join("") : `<p class="muted">${t("orders.noneRecent")}</p>`}
    </section>
  `;
}

function renderOrderHistoryCard(order, isActive = false) {
  return `
    <article class="order-history__card ${isActive ? "is-active" : ""}">
      <div>
        <strong>${orderStatusLabel(order.status)}</strong>
        <span>${t("orders.number")}: ${escapeHtml(order.orderNumber || order.id)}</span>
      </div>
      ${order.pickupCode ? `
      <div class="order-pickup-code order-pickup-code--compact">
        <span class="order-pickup-code__label">${escapeHtml(t("orders.pickupCode"))}</span>
        <span class="order-pickup-code__digits">${escapeHtml(order.pickupCode)}</span>
      </div>` : ""}
      <p>${escapeHtml(order.items.map((item) => {
        const displayItem = localizeOrderItem(item);
        return `${item.quantity} × ${displayItem.name} (${formatOrderItemDetails(displayItem)})`;
      }).join(", "))}</p>
      ${order.customer?.pickupTime ? `<small>${t("orders.pickupTime")}: ${escapeHtml(formatPickupTime(order.customer.pickupTime))}</small>` : ""}
      ${order.eta ? `<small>${t("orders.eta")}: ${escapeHtml(order.eta)}</small>` : ""}
      ${order.cancelReason ? `<small>${t("orders.cancelReason")}: ${escapeHtml(order.cancelReason)}</small>` : ""}
      ${orderDiscountMarkup(order, "small")}
      <small>${t("orders.total")}: ${order.knownTotal.toLocaleString("ru-RU")} ₽${order.hasUnknownPrice ? ` ${t("cart.unknownPlus")}` : ""}</small>
      ${isActive ? renderSuggestionBox(order) : ""}
      ${order.items?.length ? `<button class="text-button" type="button" data-repeat-order-id="${escapeHtml(order.id)}">${t("orders.repeat")}</button>` : ""}
    </article>
  `;
}

function renderSuggestionBox(order) {
  if (order.suggestionId) {
    return `
      <div class="suggestion-box suggestion-box--sent">
        <strong>${t("suggestion.title")}</strong>
        <p>${t("suggestion.alreadySent")}</p>
      </div>
    `;
  }

  return `
    <div class="suggestion-box" data-suggestion-box data-order-id="${escapeHtml(order.id)}">
      <div>
        <strong>${t("suggestion.title")}</strong>
        <p>${t("suggestion.text")}</p>
      </div>
      <textarea data-suggestion-text rows="3" maxlength="700" placeholder="${escapeHtml(t("suggestion.placeholder"))}"></textarea>
      <button class="button button--primary button--full" type="button" data-suggestion-submit>${t("suggestion.submit")}</button>
      <small data-suggestion-status></small>
    </div>
  `;
}

function orderDiscountMarkup(order, tagName = "small") {
  const content = order.discountAmount
    ? `${t("orders.discount")}: -${order.discountAmount.toLocaleString("ru-RU")} ₽${order.promo?.code ? ` (${escapeHtml(order.promo.code)})` : ""}`
    : t("orders.noDiscount");

  if (tagName === "p") {
    return `<p><b>${content.includes(":") ? content.split(":")[0] : t("orders.discount")}:</b>${content.includes(":") ? escapeHtml(content.slice(content.indexOf(":") + 1)) : ` ${escapeHtml(content)}`}</p>`;
  }

  return `<small>${escapeHtml(content)}</small>`;
}

function handleOrderActionClick(event) {
  const suggestionButton = event.target.closest("[data-suggestion-submit]");
  if (suggestionButton) {
    handleSuggestionSubmit(suggestionButton);
    return;
  }

  handleRepeatOrderClick(event);
}

function handleRepeatOrderClick(event) {
  const button = event.target.closest("[data-repeat-order-id]");
  if (!button) return;

  repeatOrderById(button.dataset.repeatOrderId);
}

async function handleSuggestionSubmit(button) {
  const box = button.closest("[data-suggestion-box]");
  const textarea = box?.querySelector("[data-suggestion-text]");
  const status = box?.querySelector("[data-suggestion-status]");
  const orderId = box?.dataset.orderId;
  const text = textarea?.value.trim() || "";

  if (!box || !textarea || !status || !orderId) return;
  if (!text) {
    status.textContent = t("suggestion.empty");
    status.dataset.state = "error";
    return;
  }

  button.disabled = true;
  status.textContent = "";
  status.dataset.state = "";

  try {
    const suggestion = await requestJson(CONFIG.suggestionsUrl, {
      method: "POST",
      body: JSON.stringify({ orderId, text })
    });
    markOrderSuggestionSent(orderId, suggestion.id);
    textarea.value = "";
    box.innerHTML = `
      <strong>${t("suggestion.title")}</strong>
      <p>${t("suggestion.alreadySent")}</p>
    `;
    box.classList.add("suggestion-box--sent");
    showToast(t("suggestion.success"));
  } catch (error) {
    const message = error.message === "SUGGESTION_ORDER_INACTIVE"
      ? t("suggestion.inactive")
      : error.message === "SUGGESTION_ALREADY_SENT"
        ? t("suggestion.alreadySent")
        : t("suggestion.failed");
    status.textContent = message;
    status.dataset.state = "error";
    showToast(message);
    console.error(error);
  } finally {
    button.disabled = false;
  }
}

function markOrderSuggestionSent(orderId, suggestionId) {
  const now = new Date().toISOString();
  state.orders = state.orders.map((order) => order.id === orderId
    ? { ...order, suggestionId, suggestionSentAt: now }
    : order);

  if (state.currentOrder?.id === orderId) {
    state.currentOrder = { ...state.currentOrder, suggestionId, suggestionSentAt: now };
  }

  saveOrderHistory();
}

function repeatLastOrder() {
  const saved = localStorage.getItem(CONFIG.lastOrderStorageKey);
  if (!saved) {
    showToast(t("toast.noLastOrder"));
    return;
  }

  try {
    const order = JSON.parse(saved);
    state.cart = normalizeCart(order.cart || {});
    saveCart();
    renderCart();
    openCart();
    showToast(t("toast.repeat"));
  } catch (error) {
    showToast(t("toast.repeatFailed"));
  }
}

function repeatOrderById(orderId) {
  const order = state.orders.find((candidate) => candidate.id === orderId);
  if (!order) {
    showToast(t("toast.repeatFailed"));
    return;
  }

  const cart = Object.fromEntries(
    (order.items || [])
      .filter((item) => item.productId && item.quantity > 0)
      .map((item) => {
        const key = item.cartKey || createCartKey(item.productId, item.variantId || "", item.optionIds || {});
        return [key || item.productId, {
          productId: item.productId,
          variantId: item.variantId || "",
          optionIds: item.optionIds || {},
          quantity: item.quantity
        }];
      })
  );

  if (!Object.keys(cart).length) {
    showToast(t("toast.repeatFailed"));
    return;
  }

  state.cart = cart;
  saveCart();
  renderCart();
  switchCartTab("cart");
  openCart();
  showToast(t("toast.repeat"));
}

function loadOrderHistory() {
  try {
    state.orders = (JSON.parse(localStorage.getItem(CONFIG.ordersStorageKey)) || []).slice(0, 5);
    state.currentOrder = state.orders.find((order) => !["done", "cancelled"].includes(order.status)) || state.orders[0] || null;
  } catch (error) {
    state.orders = [];
    state.currentOrder = null;
  }
}

function saveOrderHistory() {
  localStorage.setItem(CONFIG.ordersStorageKey, JSON.stringify(state.orders.slice(0, 5)));
}

function upsertOrderHistory(order) {
  state.orders = [order, ...state.orders.filter((candidate) => candidate.id !== order.id)].slice(0, 5);
  state.currentOrder = state.orders.find((candidate) => !["done", "cancelled"].includes(candidate.status)) || state.orders[0] || null;
  saveOrderHistory();
}

async function refreshTrackedOrders(shouldToast = false) {
  if (!state.orders.length || window.location.protocol === "file:" || isStaticPublicHost()) return;

  let changed = false;
  const refreshedOrders = await Promise.all(
    state.orders.map(async (order) => {
      try {
        const freshOrder = await requestJson(`${CONFIG.ordersUrl}/${encodeURIComponent(order.id)}`);
        if (freshOrder.status !== order.status || freshOrder.updatedAt !== order.updatedAt) {
          changed = true;
        }
        return freshOrder;
      } catch (error) {
        if (error?.message === "ORDER_NOT_FOUND") {
          changed = true;
          return null;
        }
        return order;
      }
    })
  );

  if (!changed) return;

  state.orders = refreshedOrders.filter(Boolean).slice(0, 5);
  state.currentOrder = state.orders.find((order) => !["done", "cancelled"].includes(order.status)) || state.orders[0] || null;
  saveOrderHistory();
  renderOrderStatus(state.currentOrder);
  renderOrderHistory();

  if (shouldToast) {
    showToast(t("toast.orderUpdated"));
  }
}

function applyOrderUpdate(order) {
  const trackedOrder = state.orders.find((candidate) => candidate.id === order.id);
  if (!trackedOrder) return;

  const showPickupCodeToast =
    order.pickupCode &&
    order.status === "accepted" &&
    (trackedOrder.status !== "accepted" || !trackedOrder.pickupCode);

  upsertOrderHistory(order);
  renderOrderStatus(state.currentOrder);
  renderOrderHistory();
  if (showPickupCodeToast) {
    showToast(t("toast.orderAcceptedWithCode").replace("{code}", order.pickupCode));
  } else {
    showToast(t("toast.orderUpdated"));
  }
}

function buildOrderSummary(entries, customer) {
  const lines = entries.map((entry) => {
    const displayProduct = localizeProduct(entry.product);
    const price = entry.lineTotal === null ? t("product.priceUnknown") : `${entry.lineTotal} ₽`;
    return `- ${entry.quantity} x ${displayProduct.name} (${formatEntryDetails(entry)}) — ${price}`;
  });

  const knownTotal = entries.reduce((sum, entry) => sum + (entry.lineTotal || 0), 0);

  return [
    t("order.summary.title"),
    "",
    ...lines,
    "",
    `${t("order.summary.knownTotal")}: ${knownTotal} ₽`,
    customer.name ? `${t("order.summary.name")}: ${customer.name}` : null,
    customer.contact ? `${t("order.summary.contact")}: ${customer.contact}` : null,
    customer.pickupTime ? `${t("order.summary.pickupTime")}: ${formatPickupTime(customer.pickupTime)}` : null,
    customer.comment ? `${t("order.summary.comment")}: ${customer.comment}` : null,
    customer.promo ? `${t("order.summary.promo")}: ${customer.promo}` : null
  ]
    .filter(Boolean)
    .join("\n");
}

async function copyOrderSummary(summary) {
  try {
    await navigator.clipboard.writeText(summary);
  } catch (error) {
    console.info("Clipboard is unavailable.", error);
  }
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    cache: "no-store",
    ...options
  });

  if (!response.ok) {
    let payload = null;
    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }
    throw new Error(payload?.error || `Request failed: ${response.status}`);
  }

  return response.json();
}

async function handleOrderSseEvent(event) {
  try {
    const payload = JSON.parse(event.data);
    const orderId = payload.orderId || payload.order?.id;
    if (!orderId) return;
    const tracked = state.orders.some((candidate) => candidate.id === orderId);
    if (!tracked) return;
    const freshOrder = await requestJson(`${CONFIG.ordersUrl}/${encodeURIComponent(orderId)}`);
    applyOrderUpdate(freshOrder);
  } catch (error) {
    console.info("Order SSE update skipped.", error);
  }
}

function connectMenuEvents() {
  if (!window.EventSource || window.location.protocol === "file:" || isStaticPublicHost()) {
    return;
  }

  const events = new EventSource(CONFIG.eventsUrl);
  events.addEventListener("menu:update", async () => {
    await refreshMenuFromServer(true);
  });

  events.addEventListener("order:update", (event) => {
    void handleOrderSseEvent(event);
  });

  events.addEventListener("error", () => {
    console.info("SSE connection is waiting for the local backend.");
  });
}

function connectOrderEvents() {
  // Order updates share the same SSE connection as menu updates.
}

function startMenuAutoSync() {
  if (window.location.protocol === "file:" || isStaticPublicHost()) {
    return;
  }

  window.setInterval(async () => {
    await refreshMenuFromServer(false);
  }, 8000);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshMenuFromServer(false);
    }
  });
}

function startOrderAutoSync() {
  if (window.location.protocol === "file:" || isStaticPublicHost()) {
    return;
  }

  window.setInterval(() => {
    refreshTrackedOrders(false);
  }, 7000);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshTrackedOrders(false);
    }
  });
}

async function refreshMenuFromServer(shouldToast = true) {
  const previousSignature = menuSignature(state.catalog);
  await loadCatalog();
  const nextSignature = menuSignature(state.catalog);

  if (previousSignature === nextSignature) {
    return;
  }

  renderCategoryFilters();
  renderSpecials();
  renderProducts();
  renderCart();

  if (shouldToast) {
    showToast(t("toast.menuUpdated"));
  }
}

function menuSignature(catalog) {
  return JSON.stringify((catalog.products || []).map((product) => [
    product.id,
    product.available !== false,
    Boolean(product.isSpecial),
    product.updatedAt
  ]));
}

function getCartEntries() {
  return Object.entries(state.cart)
    .map(([cartKey, rawItem]) => normalizeCartEntry(cartKey, rawItem))
    .filter((entry) => entry.product && entry.quantity > 0);
}

function loadCart() {
  try {
    state.cart = normalizeCart(JSON.parse(localStorage.getItem(CONFIG.cartStorageKey)) || {});
  } catch (error) {
    state.cart = {};
  }
}

function saveCart() {
  localStorage.setItem(CONFIG.cartStorageKey, JSON.stringify(state.cart));
}

function normalizeCart(cart = {}) {
  return Object.fromEntries(
    Object.entries(cart || {})
      .map(([cartKey, rawItem]) => {
        const entry = normalizeCartEntry(cartKey, rawItem);
        if (!entry) return null;
        return [entry.cartKey, {
          productId: entry.product.id,
          variantId: entry.variant?.id || "",
          optionIds: entry.optionIds,
          quantity: entry.quantity
        }];
      })
      .filter(Boolean)
  );
}

function normalizeCartEntry(cartKey, rawItem) {
  const legacyQuantity = typeof rawItem === "number" ? rawItem : null;
  const productId = legacyQuantity !== null ? cartKey : rawItem?.productId;
  const product = state.catalog.products.find((candidate) => candidate.id === productId);
  const quantity = Math.floor(Number(legacyQuantity ?? rawItem?.quantity));
  if (!product || !Number.isFinite(quantity) || quantity <= 0) return null;

  const variant = getVariant(product, rawItem?.variantId);
  const optionIds = normalizeOptionIds(product, rawItem?.optionIds || {});
  const resolvedKey = createCartKey(product.id, variant?.id || "", optionIds);
  const options = getSelectedOptions(product, optionIds);
  const unitPrice = calculateUnitPrice(product, variant, options);

  return {
    cartKey: resolvedKey || cartKey,
    product,
    quantity,
    variant,
    optionIds,
    options,
    unitPrice,
    size: variant?.size || product.size,
    lineTotal: unitPrice === null ? null : unitPrice * quantity
  };
}

function resolveCartItem(productId, cartKey = "", sourceElement = null) {
  if (cartKey && state.cart[cartKey] && typeof state.cart[cartKey] === "object") {
    return {
      cartKey,
      productId: state.cart[cartKey].productId,
      variantId: state.cart[cartKey].variantId || "",
      optionIds: state.cart[cartKey].optionIds || {}
    };
  }

  const product = state.catalog.products.find((candidate) => candidate.id === productId);
  if (!product) return null;

  const card = sourceElement?.closest?.("[data-product-card]");
  if (card) {
    updateProductSelectionFromCard(product, card);
  }

  const selection = getProductSelection(product);
  return {
    cartKey: createCartKey(product.id, selection.variantId, selection.optionIds),
    productId: product.id,
    variantId: selection.variantId,
    optionIds: selection.optionIds
  };
}

function collectOptionIds(product, card) {
  const result = {};
  if (!card) return result;

  for (const group of product.optionGroups || []) {
    const groupElement = card.querySelector(`[data-product-option-group="${cssEscape(group.id)}"]`);
    if (!groupElement) continue;

    if (group.type === "multi") {
      const selected = [...groupElement.querySelectorAll("input:checked")].map((input) => input.value);
      if (selected.length) result[group.id] = selected;
      continue;
    }

    const value = groupElement.querySelector("select")?.value;
    if (value) result[group.id] = value;
  }

  return normalizeOptionIds(product, result);
}

function updateProductSelectionFromCard(product, card) {
  const variantId = card?.querySelector(`[data-product-variant="${cssEscape(product.id)}"]`)?.value || getDefaultVariant(product)?.id || "";
  state.productSelections[product.id] = {
    variantId,
    optionIds: collectOptionIds(product, card)
  };
}

function getProductSelection(product) {
  const saved = state.productSelections[product.id] || {};
  return {
    variantId: getVariant(product, saved.variantId)?.id || getDefaultVariant(product)?.id || "",
    optionIds: normalizeOptionIds(product, saved.optionIds || {})
  };
}

function normalizeOptionIds(product, optionIds = {}) {
  const normalized = {};
  for (const group of product.optionGroups || []) {
    const validIds = new Set((group.options || []).map((option) => option.id));
    if (group.type === "multi") {
      const values = Array.isArray(optionIds[group.id]) ? optionIds[group.id] : [optionIds[group.id]].filter(Boolean);
      const selected = values.filter((value) => validIds.has(value)).sort();
      if (selected.length) normalized[group.id] = selected;
      continue;
    }

    const value = optionIds[group.id];
    if (validIds.has(value)) normalized[group.id] = value;
  }
  return normalized;
}

function getSelectedOptions(product, optionIds = {}) {
  const selected = [];
  for (const group of product.optionGroups || []) {
    const options = group.options || [];
    const values = group.type === "multi" ? optionIds[group.id] || [] : [optionIds[group.id]].filter(Boolean);
    for (const value of values) {
      const option = options.find((candidate) => candidate.id === value);
      if (option) selected.push({ ...option, groupId: group.id, groupLabel: group.label });
    }
  }
  return selected;
}

function createCartKey(productId, variantId = "", optionIds = {}) {
  const normalizedOptions = Object.keys(optionIds || {})
    .sort()
    .map((groupId) => {
      const value = Array.isArray(optionIds[groupId]) ? [...optionIds[groupId]].sort().join(",") : optionIds[groupId];
      return `${groupId}:${value}`;
    })
    .join("|");
  return [productId, variantId, normalizedOptions].filter(Boolean).join("::");
}

function getDefaultVariant(product) {
  return Array.isArray(product.variants) && product.variants.length ? product.variants[0] : null;
}

function getVariant(product, variantId) {
  if (!Array.isArray(product.variants) || !product.variants.length) return null;
  return product.variants.find((variant) => variant.id === variantId) || product.variants[0];
}

function hasConfigurableChoices(product) {
  return (Array.isArray(product.variants) && product.variants.length > 1) || (Array.isArray(product.optionGroups) && product.optionGroups.length > 0);
}

function getDisplayUnitPrice(product) {
  return getDefaultVariant(product)?.price ?? product.price ?? null;
}

function calculateUnitPrice(product, variant = null, options = []) {
  const basePrice = variant?.price ?? product.price ?? null;
  if (basePrice === null || basePrice === undefined) return null;
  return options.reduce((sum, option) => sum + (option.price || 0), basePrice);
}

function formatVariantLabel(variant) {
  const size = variant.size && variant.size !== variant.label ? ` · ${variant.size}` : "";
  return `${variant.label || variant.size || fallbackPortion()}${size} · ${formatPrice(variant.price)}`;
}

function formatOptionLabel(option) {
  return `${option.label}${option.price ? ` +${formatPrice(option.price)}` : ""}`;
}

function formatEntryDetails(entry) {
  const details = [entry.size || fallbackPortion(), ...entry.options.map((option) => option.label)];
  return details.filter(Boolean).join(" · ");
}

function getCategoryTitle(categoryId) {
  return t(`category.${categoryId}`) || state.catalog.categories.find((category) => category.id === categoryId)?.title || t("nav.menu");
}

function localizeProduct(product) {
  const translation = PRODUCT_TRANSLATIONS[state.language]?.[product.id];
  return translation ? { ...product, ...translation } : product;
}

function localizeOrderItem(item) {
  const translation = PRODUCT_TRANSLATIONS[state.language]?.[item.productId];
  return translation ? { ...item, name: translation.name || item.name, size: translation.size || item.size } : item;
}

function formatOrderItemDetails(item) {
  return [
    item.size || fallbackPortion(),
    ...(item.options || []).map((option) => option.label)
  ]
    .filter(Boolean)
    .join(" · ");
}

function formatPrice(price) {
  return price ? `${price.toLocaleString("ru-RU")} ₽` : t("product.priceUnknown");
}

function formatCount(count) {
  const forms = [t("count.one"), t("count.few"), t("count.many")];
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} ${forms[0]}`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} ${forms[1]}`;
  }

  return `${count} ${forms[2]}`;
}

function orderStatusLabel(status) {
  return t(`status.${status || "new"}`);
}

function orderStatusMessage(order) {
  if (order.status === "cancelled") return t("status.cancelledMessage");
  if (order.status === "done") return t("status.terminal");
  if (order.status === "ready") return t("status.readyMessage");
  if (order.status === "accepted" && order.pickupCode) {
    return t("status.acceptedPickupMessage").replace("{code}", order.pickupCode);
  }
  return t("status.message");
}

function isActiveOrder(order) {
  return order && !["done", "cancelled"].includes(order.status);
}

function normalizePhoneNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits || /^(\d)\1+$/.test(digits)) return "";

  let normalized = "";
  if (digits.length === 11 && digits.startsWith("8")) {
    normalized = `7${digits.slice(1)}`;
  } else if (digits.length === 11 && digits.startsWith("7")) {
    normalized = digits;
  } else if (digits.length === 10 && digits.startsWith("9")) {
    normalized = `7${digits}`;
  }

  if (!normalized || /^(\d)\1+$/.test(normalized.slice(1))) return "";
  return `+${normalized}`;
}

function normalizePromoCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, "")
    .slice(0, 32);
}

function fallbackPortion() {
  return state.language === "en" ? "portion" : "порция";
}

function normalizeTag(tag) {
  const labels = {
    featured: "hit",
    bestseller: "hit",
    seasonal: "season",
    pudding: "pudding",
    bakery: "bakery",
    drink: "drink",
    chocolate: "choco",
    coffee: "coffee",
    nuts: "nuts",
    matcha: "matcha",
    soda: "soda",
    new: "new",
    set: "set",
    special: "special"
  };

  return labels[tag] || tag;
}

function showToast(message) {
  selectors.toast.textContent = message;
  selectors.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    selectors.toast.classList.remove("is-visible");
  }, 3200);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cssEscape(value = "") {
  return window.CSS?.escape ? CSS.escape(value) : String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

const PICKUP_CONFIG = {
  openHour: 10,
  closeHour: 19,
  lastPickupMinutesBeforeClose: 5,
  leadMinutes: 15,
  horizonDays: 14,
  stepMinutes: 5
};

const PICKUP_TZ = "Europe/Moscow";
const PICKUP_MSK_OFFSET_MS = 3 * 60 * 60 * 1000;

function pad2(n) {
  return String(n).padStart(2, "0");
}

function moscowWallFromUtcMs(ms) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: PICKUP_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const map = {};
  for (const part of formatter.formatToParts(new Date(ms))) {
    if (part.type !== "literal") map[part.type] = part.value;
  }
  return {
    y: Number(map.year),
    mo: Number(map.month),
    d: Number(map.day),
    h: Number(map.hour),
    mi: Number(map.minute)
  };
}

function utcMsFromMoscowWall(y, mo, d, h, mi) {
  return Date.UTC(y, mo - 1, d, h, mi) - PICKUP_MSK_OFFSET_MS;
}

function moscowYmdFromUtcMs(ms) {
  const { y, mo, d } = moscowWallFromUtcMs(ms);
  return `${y}-${pad2(mo)}-${pad2(d)}`;
}

function moscowYmdAddDays(ymd, days) {
  const [y, mo, d] = ymd.split("-").map(Number);
  const anchor = Date.UTC(y, mo - 1, d, 12, 0) - PICKUP_MSK_OFFSET_MS + days * 24 * 60 * 60 * 1000;
  return moscowYmdFromUtcMs(anchor);
}

function ceilUtcMsToMoscowFiveMinutes(ms) {
  const w = moscowWallFromUtcMs(ms);
  const total = w.h * 60 + w.mi;
  const rem = total % 5;
  if (rem === 0) return ms;
  return ms + (5 - rem) * 60 * 1000;
}

function hhmmFromTotalMinutes(total) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${pad2(h)}:${pad2(m)}`;
}

function totalMinutesFromHHMM(value) {
  const match = String(value || "").trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if (!Number.isFinite(h) || !Number.isFinite(m) || h > 23 || m > 59) return null;
  return h * 60 + m;
}

function getTimeBoundsForMoscowYmd(ymd) {
  const today = moscowYmdFromUtcMs(Date.now());
  const horizon = moscowYmdAddDays(today, PICKUP_CONFIG.horizonDays);
  const openM = PICKUP_CONFIG.openHour * 60;
  const lastM = PICKUP_CONFIG.closeHour * 60 - PICKUP_CONFIG.lastPickupMinutesBeforeClose;

  if (!ymd || ymd < today || ymd > horizon) {
    return { impossible: true, minM: openM, maxM: lastM };
  }

  if (ymd !== today) {
    return { impossible: false, minM: openM, maxM: lastM };
  }

  const [y, mo, d] = ymd.split("-").map(Number);
  const openMs = utcMsFromMoscowWall(y, mo, d, PICKUP_CONFIG.openHour, 0);
  const leadMs = Date.now() + PICKUP_CONFIG.leadMinutes * 60 * 1000;
  let candidate = Math.max(openMs, leadMs);
  candidate = ceilUtcMsToMoscowFiveMinutes(candidate);
  const wall = moscowWallFromUtcMs(candidate);
  const sameDay = `${wall.y}-${pad2(wall.mo)}-${pad2(wall.d)}`;
  if (sameDay !== ymd) {
    return { impossible: true, minM: openM, maxM: lastM };
  }

  const minM = wall.h * 60 + wall.mi;
  if (minM > lastM) {
    return { impossible: true, minM, maxM: lastM };
  }

  return { impossible: false, minM, maxM: lastM };
}

function rebuildPickupSlotSelectOptions(ymd) {
  const select = selectors.checkoutForm?.elements?.pickupClock;
  if (!select || select.tagName !== "SELECT") return null;

  const bounds = getTimeBoundsForMoscowYmd(ymd);
  const prevVal = select.value;

  select.textContent = "";

  if (bounds.impossible) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "—";
    select.appendChild(opt);
    select.value = "";
    select.disabled = true;
    return bounds;
  }

  select.disabled = false;
  const step = PICKUP_CONFIG.stepMinutes;
  for (let m = bounds.minM; m <= bounds.maxM; m += step) {
    const opt = document.createElement("option");
    const val = hhmmFromTotalMinutes(m);
    opt.value = val;
    opt.textContent = val;
    select.appendChild(opt);
  }

  if (prevVal && [...select.options].some((o) => o.value === prevVal)) {
    select.value = prevVal;
  }

  return bounds;
}

function parsePickupMoscowIso(value) {
  const match = String(value || "").trim().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::\d{2})?$/);
  if (!match) return null;

  const y = Number(match[1]);
  const mo = Number(match[2]);
  const d = Number(match[3]);
  const h = Number(match[4]);
  const mi = Number(match[5]);

  if (mo < 1 || mo > 12 || d < 1 || d > 31 || h > 23 || mi > 59) return null;

  const utcMs = Date.UTC(y, mo - 1, d, h, mi) - PICKUP_MSK_OFFSET_MS;
  if (!Number.isFinite(utcMs)) return null;

  const canonical = `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}`;
  return { canonical, utcMs, y, mo, d, h, mi };
}

function pickupHorizonUtcMs() {
  return Date.now() + PICKUP_CONFIG.horizonDays * 24 * 60 * 60 * 1000;
}

function validatePickupTime(value) {
  const parsed = parsePickupMoscowIso(value);
  if (!parsed) return "orders.pickupTimeInvalid";

  const minutesOfDay = parsed.h * 60 + parsed.mi;
  const openMinute = PICKUP_CONFIG.openHour * 60;
  const lastPickupMinute = PICKUP_CONFIG.closeHour * 60 - PICKUP_CONFIG.lastPickupMinutesBeforeClose;
  if (minutesOfDay < openMinute || minutesOfDay > lastPickupMinute) return "orders.pickupTimeHours";

  const leadMs = PICKUP_CONFIG.leadMinutes * 60 * 1000;
  if (parsed.utcMs < Date.now() + leadMs) return "orders.pickupTimePast";

  if (parsed.utcMs > pickupHorizonUtcMs()) return "orders.pickupTimeFar";

  return null;
}

function formatPickupTime(value) {
  const parsed = parsePickupMoscowIso(value);
  if (!parsed) return String(value || "");

  const locale = state.language === "en" ? "en-GB" : "ru-RU";
  const datePart = new Intl.DateTimeFormat(locale, {
    timeZone: PICKUP_TZ,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(parsed.utcMs));
  const hm = `${pad2(parsed.h)}:${pad2(parsed.mi)}`;
  return state.language === "en" ? `${datePart} at ${hm}` : `${datePart} в ${hm}`;
}

function getCombinedPickupIso() {
  const date = selectors.checkoutForm?.elements?.pickupDate?.value?.trim() || "";
  const clock = selectors.checkoutForm?.elements?.pickupClock?.value?.trim() || "";
  if (!date || !clock) return "";
  const timeMatch = clock.match(/^(\d{2}):(\d{2})/);
  if (!timeMatch) return "";
  return `${date}T${timeMatch[1]}:${timeMatch[2]}`;
}

function snapPickupSlotToBounds() {
  const dateEl = selectors.checkoutForm.elements.pickupDate;
  const clockEl = selectors.checkoutForm.elements.pickupClock;
  if (!dateEl || !clockEl) return;

  let ymd = dateEl.value;
  if (!ymd) return;

  let bounds = getTimeBoundsForMoscowYmd(ymd);
  let guard = 0;
  while (bounds.impossible && ymd < dateEl.max && guard < 24) {
    ymd = moscowYmdAddDays(ymd, 1);
    dateEl.value = ymd;
    bounds = getTimeBoundsForMoscowYmd(ymd);
    guard += 1;
  }

  rebuildPickupSlotSelectOptions(ymd);
  bounds = getTimeBoundsForMoscowYmd(ymd);
  if (bounds.impossible) {
    return;
  }

  let sel = totalMinutesFromHHMM(clockEl.value);
  if (sel === null) sel = bounds.minM;
  if (sel % PICKUP_CONFIG.stepMinutes !== 0) sel = Math.ceil(sel / PICKUP_CONFIG.stepMinutes) * PICKUP_CONFIG.stepMinutes;
  if (sel < bounds.minM) sel = bounds.minM;
  if (sel > bounds.maxM) sel = bounds.maxM;
  const v = hhmmFromTotalMinutes(sel);
  if ([...clockEl.options].some((o) => o.value === v)) {
    clockEl.value = v;
  } else {
    clockEl.value = hhmmFromTotalMinutes(bounds.minM);
  }
}

function refreshPickupSlotConstraints() {
  const dateEl = selectors.checkoutForm.elements.pickupDate;
  const clockEl = selectors.checkoutForm.elements.pickupClock;
  if (!dateEl || !clockEl) return;

  const today = moscowYmdFromUtcMs(Date.now());
  const maxDate = moscowYmdAddDays(today, PICKUP_CONFIG.horizonDays);
  dateEl.min = today;
  dateEl.max = maxDate;

  const ymd = dateEl.value || today;
  rebuildPickupSlotSelectOptions(ymd);
}

function initPickupSlotDefaults() {
  const dateEl = selectors.checkoutForm.elements.pickupDate;
  const clockEl = selectors.checkoutForm.elements.pickupClock;
  if (!dateEl || !clockEl) return;

  const today = moscowYmdFromUtcMs(Date.now());
  dateEl.min = today;
  dateEl.max = moscowYmdAddDays(today, PICKUP_CONFIG.horizonDays);
  if (!dateEl.value || dateEl.value < dateEl.min || dateEl.value > dateEl.max) {
    dateEl.value = today;
  }

  refreshPickupSlotConstraints();
  snapPickupSlotToBounds();
  updatePickupPreview();
}

function refreshPickupSlotUI() {
  const dateEl = selectors.checkoutForm.elements.pickupDate;
  const clockEl = selectors.checkoutForm.elements.pickupClock;
  if (!dateEl || !clockEl) return;
  if (!dateEl.value) {
    initPickupSlotDefaults();
    return;
  }
  refreshPickupSlotConstraints();
  snapPickupSlotToBounds();
  updatePickupPreview();
}

function onPickupSlotInput() {
  updatePickupPreview();
  updateCheckoutState();
}

function onPickupSlotChange() {
  refreshPickupSlotConstraints();
  snapPickupSlotToBounds();
  updatePickupPreview();
  updateCheckoutState();
}

function updatePickupPreview() {
  const el = selectors.pickupPreview;
  if (!el) return;

  const iso = getCombinedPickupIso();
  if (!iso) {
    el.hidden = true;
    el.textContent = "";
    return;
  }

  if (validatePickupTime(iso)) {
    el.hidden = true;
    el.textContent = "";
    return;
  }

  el.hidden = false;
  el.textContent = formatPickupTime(iso);
}
