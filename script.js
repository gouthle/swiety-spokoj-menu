const menus = {
  coffee: [
    ["Espresso", "9 zł", "Świeżo palona kawa specialty z krakowskiej palarni, parzona na ekspresie Sanremo."],
    ["Espresso doppio", "14 zł", "Podwójna porcja espresso dla prawdziwych koneserów."],
    ["Americano", "15 zł", "Espresso i gorąca woda. Klasyka w najlepszym wydaniu."],
    ["Cappuccino", "20 zł", "Klasyczne połączenie espresso z aksamitnym mlekiem."],
    ["Flat white", "17 zł", "Podwójne espresso z delikatnie spienionym mlekiem."],
    ["Latte", "20 zł", "Delikatne espresso z dużą ilością mleka i aksamitną pianką."],
    ["Espresso macchiato", "10 zł", "Espresso z odrobiną mlecznej pianki."],
    ["Espresso affogato", "18 zł", "Espresso i lody waniliowe. Proste. Boskie."],
    ["Orange espresso", "20 zł", "Espresso z tonikiem i sokiem pomarańczowym."],
    ["Espresso tonic", "20 zł", "Espresso, tonic i lód. Orzeźwiające połączenie."],
    ["Ice coffee / latte", "15 / 19 zł", "Mrożona kawa lub latte na lodzie."],
    ["Przelewowa (drip)", "20 zł", "Powtarzalny drip z kawy specialty. Odkryj owoce, kwiaty i wyjątkowy smak."]
  ],
  cold: [
    ["Lemoniada", "18 zł", "Domowa lemoniada z naturalnych składników.", ["Rabarbarowa", "Cytryna i pomarańcza", "Malina"]],
    ["Kinga Pienińska lemoniada 250 ml", "12 zł", "Butelkowana lemoniada.", ["Cytryna", "Pomarańcza"]],
    ["Soki wolnowyciskane", "20 zł", "Świeże soki tłoczone metodą slow juicing."],
    ["Soki Cappy", "8 zł", "Klasyczne soki owocowe."],
    ["Fuze Tea 500 ml", "12 zł", "Borówka i lawenda."],
    ["Woda", "8 zł", "Woda niegazowana lub gazowana."],
    ["Shake proteinowy", "20 zł", "Izolat białka 97%. 28 g białka, 26 g węglowodanów, 8,5 g tłuszczu, 250 kcal."]
  ],
  tea: [
    ["Herbata liściasta", "15 zł", "Starannie wyselekcjonowane mieszanki herbat premium.", ["Earl Grey", "Green Oasis", "Pina Colada", "Genmaicha", "Jasmine Valley"]],
    ["Herbata Yogi Tea", "12 zł", "Wyjątkowe kompozycje dla ciała, umysłu i duszy."],
    ["Oolong", "16 zł", "Półfermentowana herbata o głębokim, naturalnie słodkim smaku."],
    ["Kakao", "15 zł", "Delikatne kakao na mleku."],
    ["Babyccino", "7 zł", "Pianka mleczna z kakao dla najmłodszych."],
    ["Gorąca czekolada", "17 zł", "Gęsta, intensywna czekolada dla prawdziwych smakoszy."],
    ["Matcha", "22 zł", "Klasyczna matcha."],
    ["Matcha latte", "22 zł", "Matcha z mlekiem."],
    ["Ice matcha", "22 zł", "Matcha na lodzie."],
    ["Ice matcha power", "25 zł", "Mrożona matcha w mocniejszej wersji."],
    ["Dodatki", "od 2 zł", "Syrop, dodatkowe espresso, mleko extra krowie oraz mleka roślinne lub bez laktozy."]
  ],
  sweets: [
    ["Truskawka", "8 zł", "Lody rzemieślnicze."],
    ["Słony karmel", "8 zł", "Lody rzemieślnicze."],
    ["Mleczna truskawka", "8 zł", "Lody rzemieślnicze."],
    ["Śmietanka", "8 zł", "Lody rzemieślnicze."],
    ["Czekolada", "8 zł", "Lody rzemieślnicze."],
    ["Mascarpone z jagodą", "10 zł", "Lody rzemieślnicze."],
    ["Limonka mięta", "10 zł", "Lody rzemieślnicze."],
    ["Pistacja", "10 zł", "Lody rzemieślnicze."],
    ["Polewa", "2,50 zł", "Słony karmel, truskawka albo czekolada."]
  ],
  bar: [
    ["Wino białe", "16-26 zł", "Kieliszek lub porcja zgodnie z dostępnością."],
    ["Wino czerwone", "16-26 zł", "Kieliszek lub porcja zgodnie z dostępnością."],
    ["Wino różowe", "16-26 zł", "Kieliszek lub porcja zgodnie z dostępnością."],
    ["Wino musujące", "16-26 zł", "Kieliszek lub porcja zgodnie z dostępnością."],
    ["Piwo alkoholowe", "15 zł", "Butelkowane piwo."],
    ["Piwo bezalkoholowe", "15 zł", "Butelkowane piwo."],
    ["Piwo smakowe", "15 zł", "Butelkowane piwo smakowe."],
    ["Aperol Spritz", "29 zł", "Klasyczny, lekki drink."],
    ["Limoncello Spritz", "29 zł", "Cytrusowy spritz na spokojny wieczór."]
  ]
};

const makeItem = ([name, price, description, variants]) => {
  const item = document.createElement("article");
  item.className = "item";

  const button = document.createElement("button");
  button.className = "item__button";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");

  const title = document.createElement("p");
  title.className = "item__name";
  title.textContent = name;

  const priceEl = document.createElement("span");
  priceEl.className = "item__price";
  priceEl.textContent = price;

  const details = document.createElement("div");
  details.className = "item__details";

  const text = document.createElement("p");
  text.textContent = description;
  details.append(text);

  if (variants?.length) {
    const list = document.createElement("ul");
    variants.forEach((variant) => {
      const li = document.createElement("li");
      li.textContent = variant;
      list.append(li);
    });
    details.append(list);
  }

  button.append(title, priceEl);
  item.append(button, details);

  button.addEventListener("click", () => {
    const open = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });

  return item;
};

document.querySelectorAll("[data-menu]").forEach((container) => {
  menus[container.dataset.menu].forEach((entry) => container.append(makeItem(entry)));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("is-active", button === tab));
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === target));
    window.scrollTo({ top: document.querySelector(".tabs").offsetTop, behavior: "smooth" });
  });
});
