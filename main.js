console.log("[Horizon] Installing Client...");

try {
   var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner']

   // Make the prompt box
   var iframe = document.createElement("iframe");
   iframe.style.display = 'none';
   document.body.appendChild(iframe);
   window.prompt = iframe.contentWindow.prompt;

   // Create the gui
   var gui = document.createElement("div");
   gui.id = "horizon_gui";
   gui.style = "opacity: 75%; display: none;";

   var gui_open = false;

   // Default Section
   var default_section = document.createElement("div");
   default_section.id = "default";
   default_section.style = "width: 120px;";

   var default_title_div = document.createElement("div");
   default_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var default_title = document.createElement("span");
   default_title.style = "font-weight: bold; font-size: 15px;";
   default_title.textContent = "Default";

   var all_answers_correct = document.createElement("button");
   all_answers_correct.id = "all_answers_correct";
   all_answers_correct.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var all_answers_correct_text = document.createElement("span");
   all_answers_correct_text.style = "font-size: 12.5px; font-weight: bold;";
   all_answers_correct_text.textContent = "All answers Correct";

   // Gamemode Section
   var gamemode_section = document.createElement("div");
   gamemode_section.id = "gamemode";
   gamemode_section.style = "width: 120px; float: left; margin-left: 115px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px";

   var gamemode_title_div = document.createElement("div")
   gamemode_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var gamemode_title = document.createElement("span");
   gamemode_title.style = "font-weight: bold; font-size: 15px;";
   gamemode_title.textContent = "Gamemodes";

   // Game Hacks
   // Blook Rush
   var blook_rush = document.createElement("button");
   blook_rush.id = "blook_rush_cheat";
   blook_rush.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var blook_rush_text = document.createElement("span");
   blook_rush_text.style = "font-size: 12.5px; font-weight: bold;";
   blook_rush_text.textContent = "Blook Rush";

   // Cafe
   var cafe = document.createElement("button");
   cafe.id = "cafe_cheat";
   cafe.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var cafe_text = document.createElement("span");
   cafe_text.style = "font-size: 12.5px; font-weight: bold;";
   cafe_text.textContent = "Cafe";

   // Crypto Hack
   var crypto_hack = document.createElement("button");
   crypto_hack.id = "crypto_hack_cheat";
   crypto_hack.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var crypto_hack_text = document.createElement("span");
   crypto_hack_text.style = "font-size: 12.5px; font-weight: bold;";
   crypto_hack_text.textContent = "Crypto Hack";

   // Deceptive Dinos
   var deceptive_dinos = document.createElement("button");
   deceptive_dinos.id = "deceptive_dinos_cheat";
   deceptive_dinos.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var deceptive_dinos_text = document.createElement("span");
   deceptive_dinos_text.style = "font-size: 12.5px; font-weight: bold;";
   deceptive_dinos_text.textContent = "Deceptive Dinos";

   // Factory
   var factory = document.createElement("button");
   factory.id = "factory_cheat";
   factory.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var factory_text = document.createElement("span");
   factory_text.style = "font-size: 12.5px; font-weight: bold;";
   factory_text.textContent = "Factory";

   // Fishing Frenzy
   var fishing_frenzy = document.createElement("button");
   fishing_frenzy.id = "fishing_frenzy_cheat";
   fishing_frenzy.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var fishing_frenzy_text = document.createElement("span");
   fishing_frenzy_text.style = "font-size: 12.5px; font-weight: bold;";
   fishing_frenzy_text.textContent = "Fishing Frenzy";

   // Gold Quest
   var gold_quest = document.createElement("button");
   gold_quest.id = "gold_quest_cheat";
   gold_quest.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var gold_quest_text = document.createElement("span");
   gold_quest_text.style = "font-size: 12.5px; font-weight: bold;";
   gold_quest_text.textContent = "Gold Quest";

   // Monster Brawl
   var monster_brawl = document.createElement("button");
   monster_brawl.id = "monster_brawl_cheat";
   monster_brawl.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var monster_brawl_text = document.createElement("span");
   monster_brawl_text.style = "font-size: 12.5px; font-weight: bold;";
   monster_brawl_text.textContent = "Monster Brawl";

   // Racing
   var racing = document.createElement("button");
   racing.id = "racing_cheat";
   racing.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var racing_text = document.createElement("span");
   racing_text.style = "font-size: 12.5px; font-weight: bold;";
   racing_text.textContent = "Racing";

   // Santas Workshop
   var santas_workshop = document.createElement("button");
   santas_workshop.id = "santas_workshop_cheat";
   santas_workshop.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var santas_workshop_text = document.createElement("span");
   santas_workshop_text.style = "font-size: 12.5px; font-weight: bold;";
   santas_workshop_text.textContent = "Santas Workshop";

   // Tower Defense
   var tower_defense = document.createElement("button");
   tower_defense.id = "tower_defense_cheat";
   tower_defense.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var tower_defense_text = document.createElement("span");
   tower_defense_text.style = "font-size: 12.5px; font-weight: bold;";
   tower_defense_text.textContent = "Tower Defense";

   // Tower of Doom
   var tower_of_doom = document.createElement("button");
   tower_of_doom.id = "tower_of_doom_cheat";
   tower_of_doom.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var tower_of_doom_text = document.createElement("span");
   tower_of_doom_text.style = "font-size: 12.5px; font-weight: bold;";
   tower_of_doom_text.textContent = "Tower of Doom";

   // Game Sections
   // Blook Rush
   var blook_rush_section = document.createElement("div");
   blook_rush_section.id = "blook_rush_section";
   blook_rush_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var blook_rush_title_div = document.createElement("div");
   blook_rush_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var blook_rush_title_text = document.createElement("span");
   blook_rush_title_text.style = "font-weight: bold; font-size: 15px";
   blook_rush_title_text.textContent = "Blook Rush";

   // Cafe
   var cafe_section = document.createElement("div");
   cafe_section.id = "cafe_section";
   cafe_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var cafe_title_div = document.createElement("div");
   cafe_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var cafe_title_text = document.createElement("span");
   cafe_title_text.style = "font-weight: bold; font-size: 15px";
   cafe_title_text.textContent = "Cafe";

   // Crypto Hack
   var crypto_hack_section = document.createElement("div");
   crypto_hack_section.id = "crypto_hack_section";
   crypto_hack_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var crypto_hack_title_div = document.createElement("div");
   crypto_hack_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var crypto_hack_title_text = document.createElement("span");
   crypto_hack_title_text.style = "font-weight: bold; font-size: 15px";
   crypto_hack_title_text.textContent = "Crypto Hack";

   // Deceptive Dinos
   var deceptive_dinos_section = document.createElement("div");
   deceptive_dinos_section.id = "deceptive_dinos_section";
   deceptive_dinos_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var deceptive_dinos_title_div = document.createElement("div");
   deceptive_dinos_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var deceptive_dinos_title_text = document.createElement("span");
   deceptive_dinos_title_text.style = "font-weight: bold; font-size: 15px";
   deceptive_dinos_title_text.textContent = "Deceptive Dinos";

   // Factory
   var factory_section = document.createElement("div");
   factory_section.id = "factory_section";
   factory_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var factory_title_div = document.createElement("div");
   factory_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var factory_title_text = document.createElement("span");
   factory_title_text.style = "font-weight: bold; font-size: 15px";
   factory_title_text.textContent = "Factory";

   // Fishing Frenzy
   var fishing_frenzy_section = document.createElement("div");
   fishing_frenzy_section.id = "fishing_frenzy_section";
   fishing_frenzy_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var fishing_frenzy_title_div = document.createElement("div");
   fishing_frenzy_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var fishing_frenzy_title_text = document.createElement("span");
   fishing_frenzy_title_text.style = "font-weight: bold; font-size: 15px";
   fishing_frenzy_title_text.textContent = "Fishing Frenzy";

   // Gold Quest
   var gold_quest_section = document.createElement("div");
   gold_quest_section.id = "gold_quest_section";
   gold_quest_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var gold_quest_title_div = document.createElement("div");
   gold_quest_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var gold_quest_title_text = document.createElement("span");
   gold_quest_title_text.style = "font-weight: bold; font-size: 15px";
   gold_quest_title_text.textContent = "Gold Quest";

   // Monster Brawl
   var monster_brawl_section = document.createElement("div");
   monster_brawl_section.id = "monster_brawl_section";
   monster_brawl_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var monster_brawl_title_div = document.createElement("div");
   monster_brawl_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var monster_brawl_title_text = document.createElement("span");
   monster_brawl_title_text.style = "font-weight: bold; font-size: 15px";
   monster_brawl_title_text.textContent = "Monster Brawl";

   // Racing
   var racing_section = document.createElement("div");
   racing_section.id = "racing_section";
   racing_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var racing_title_div = document.createElement("div");
   racing_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var racing_title_text = document.createElement("span");
   racing_title_text.style = "font-weight: bold; font-size: 15px";
   racing_title_text.textContent = "Racing";

   // Santas Workshop
   var santas_workshop_section = document.createElement("div");
   santas_workshop_section.id = "santas_workshop_section";
   santas_workshop_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var santas_workshop_title_div = document.createElement("div");
   santas_workshop_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var santas_workshop_title_text = document.createElement("span");
   santas_workshop_title_text.style = "font-weight: bold; font-size: 15px";
   santas_workshop_title_text.textContent = "Santas";

   // Tower Defense
   var tower_defense_section = document.createElement("div");
   tower_defense_section.id = "tower_defense_section";
   tower_defense_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var tower_defense_title_div = document.createElement("div");
   tower_defense_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var tower_defense_title_text = document.createElement("span");
   tower_defense_title_text.style = "font-weight: bold; font-size: 15px";
   tower_defense_title_text.textContent = "Tower Defense";

   // Tower of Doom
   var tower_of_doom_section = document.createElement("div");
   tower_of_doom_section.id = "tower_of_doom_section";
   tower_of_doom_section.style = "width: 120px; float: left; margin-left: 230px; margin-top:-90px; float:left; margin-left: 0px; margin-top: -45px; display: none;";

   var tower_of_doom_title_div = document.createElement("div");
   tower_of_doom_title_div.style = "background-color: red; width: 120px; height: 45px; text-align: center; vertical-align: middle; line-height: 45px;";

   var tower_of_doom_title_text = document.createElement("span");
   tower_of_doom_title_text.style = "font-weight: bold; font-size: 15px";
   tower_of_doom_title_text.textContent = "Tower of Doom";

   // Game Hacks
   // Blook Rush Hacks

   // Cafe Hacks

   // Crypto Hack Hacks
   var find_password = document.createElement("button");
   find_password.id = "crypto_find_password";
   find_password.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var find_password_text = document.createElement("span");
   find_password_text.style = "font-size: 12.5px; font-weight: bold;";
   find_password_text.textContent = "Find Password";

   var set_crypto = document.createElement("button");
   set_crypto.id = "crypto_set_crypto";
   set_crypto.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_crypto_text = document.createElement("span");
   set_crypto_text.style = "font-size: 12.5px; font-weight: bold;";
   set_crypto_text.textContent = "Set Crypto";

   var crypto_set_password = document.createElement("button");
   crypto_set_password.id = "crypto_set_password";
   crypto_set_password.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var crypto_set_password_text = document.createElement("span");
   crypto_set_password_text.style = "font-size: 12.5px; font-weight: bold;";
   crypto_set_password_text.textContent = "Set Password";

   // Decptive Dinos

   // Factory

   // Fishing Frenzy
   var set_lure = document.createElement("button");
   set_lure.id = "set_lure";
   set_lure.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_lure_text = document.createElement("span");
   set_lure_text.style = "font-size: 12.5px; font-weight: bold;";
   set_lure_text.textContent = "Set Lure"; 

   var set_weight = document.createElement("button");
   set_weight.id = "set_weight";
   set_weight.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_weight_text = document.createElement("span");
   set_weight_text.style = "font-size: 12.5px; font-weight: bold;";
   set_weight_text.textContent = "Set Weight"; 

   // Gold Quest
   var set_gold = document.createElement("button");
   set_gold.id = "set_gold";
   set_gold.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_gold_text = document.createElement("span");
   set_gold_text.style = "font-size: 12.5px; font-weight: bold;";
   set_gold_text.textContent = "Set Gold"; 

   // Santas Workshop
   var set_toys_per_question = document.createElement("button");
   set_toys_per_question.id = "set_toys_per_question";
   set_toys_per_question.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_toys_per_question_text = document.createElement("span");
   set_toys_per_question_text.style = "font-size: 12.5px; font-weight: bold;";
   set_toys_per_question_text.textContent = "Toys/Question"

   var set_toys = document.createElement("button");
   set_toys.id = "set_toys"
   set_toys.style = "background-color: gray; width: 120px; height: 45px; outline: none; float: left;";

   var set_toys_text = document.createElement("span");
   set_toys_text.style = "font-size: 12.5px; font-weight: bold;";
   set_toys_text.innerHTML = "Set Toys";

   // Append to elements to body
   blook_rush_title_div.appendChild(blook_rush_title_text);
   cafe_title_div.appendChild(cafe_title_text);
   crypto_hack_title_div.appendChild(crypto_hack_title_text);
   deceptive_dinos_title_div.appendChild(deceptive_dinos_title_text);
   factory_title_div.appendChild(factory_title_text);
   fishing_frenzy_title_div.appendChild(fishing_frenzy_title_text);
   gold_quest_title_div.appendChild(gold_quest_title_text);
   monster_brawl_title_div.appendChild(monster_brawl_title_text);
   racing_title_div.appendChild(racing_title_text);
   santas_workshop_title_div.appendChild(santas_workshop_title_text);
   tower_defense_title_div.appendChild(tower_defense_title_text);
   tower_of_doom_title_div.appendChild(tower_of_doom_title_text);

   blook_rush_section.appendChild(blook_rush_title_div);
   cafe_section.appendChild(cafe_title_div);
   crypto_hack_section.appendChild(crypto_hack_title_div);
   deceptive_dinos_section.appendChild(deceptive_dinos_title_div);
   factory_section.appendChild(factory_title_div);
   fishing_frenzy_section.appendChild(fishing_frenzy_title_div);
   gold_quest_section.appendChild(gold_quest_title_div);
   monster_brawl_section.appendChild(monster_brawl_title_div);
   racing_section.appendChild(racing_title_div);
   santas_workshop_section.appendChild(santas_workshop_title_div);
   tower_defense_section.appendChild(tower_defense_title_div);
   tower_of_doom_section.appendChild(tower_of_doom_title_div);

   blook_rush.appendChild(blook_rush_text);
   cafe.appendChild(cafe_text);
   crypto_hack.appendChild(crypto_hack_text);
   deceptive_dinos.appendChild(deceptive_dinos_text);
   factory.appendChild(factory_text);
   fishing_frenzy.appendChild(fishing_frenzy_text);
   gold_quest.appendChild(gold_quest_text);
   monster_brawl.appendChild(monster_brawl_text);
   racing.appendChild(racing_text);
   santas_workshop.appendChild(santas_workshop_text);
   tower_defense.appendChild(tower_defense_text);
   tower_of_doom.appendChild(tower_of_doom_text);

   find_password.appendChild(find_password_text);
   crypto_hack_section.appendChild(find_password);
   set_crypto.appendChild(set_crypto_text);
   crypto_hack_section.appendChild(set_crypto);
   crypto_set_password.appendChild(crypto_set_password_text);
   crypto_hack_section.appendChild(crypto_set_password);

   set_lure.appendChild(set_lure_text);
   set_weight.appendChild(set_weight_text);
   fishing_frenzy_section.appendChild(set_lure);
   fishing_frenzy_section.appendChild(set_weight);

   set_gold.appendChild(set_gold_text);
   gold_quest_section.appendChild(set_gold);

   set_toys_per_question.appendChild(set_toys_per_question_text);
   set_toys.appendChild(set_toys_text);
   santas_workshop_section.appendChild(set_toys_per_question);
   santas_workshop_section.appendChild(set_toys);

   default_title_div.appendChild(default_title);
   default_section.appendChild(default_title_div);
   all_answers_correct.appendChild(all_answers_correct_text);
   default_section.appendChild(all_answers_correct);

   gamemode_title_div.appendChild(gamemode_title);
   gamemode_section.appendChild(gamemode_title_div);
   gamemode_section.appendChild(blook_rush);
   gamemode_section.appendChild(cafe);
   gamemode_section.appendChild(crypto_hack);
   gamemode_section.appendChild(deceptive_dinos);
   gamemode_section.appendChild(factory);
   gamemode_section.appendChild(fishing_frenzy);
   gamemode_section.appendChild(gold_quest);
   gamemode_section.appendChild(monster_brawl);
   gamemode_section.appendChild(racing);
   gamemode_section.appendChild(santas_workshop);
   gamemode_section.appendChild(tower_defense);
   gamemode_section.appendChild(tower_of_doom);

   gui.appendChild(default_section);
   gui.appendChild(gamemode_section);

   gui.appendChild(blook_rush_section);
   gui.appendChild(cafe_section);
   gui.appendChild(crypto_hack_section);
   gui.appendChild(deceptive_dinos_section);
   gui.appendChild(factory_section);
   gui.appendChild(fishing_frenzy_section);
   gui.appendChild(gold_quest_section);
   gui.appendChild(monster_brawl_section);
   gui.appendChild(racing_section);
   gui.appendChild(santas_workshop_section);
   gui.appendChild(tower_defense_section);
   gui.appendChild(tower_of_doom_section);

   document.body.insertBefore(gui, document.body.firstChild);

   // TODO Event Listeners
   all_answers_correct.addEventListener("click", all_answers_correct_function);

   find_password.addEventListener("click", find_password_function);
   set_crypto.addEventListener("click", set_crypto_function);
   crypto_set_password.addEventListener("click", set_password_function);

   set_lure.addEventListener("click", set_lure_function);
   set_weight.addEventListener("click", set_weight_function);

   set_gold.addEventListener("click", set_gold_function);

   set_toys_per_question.addEventListener("click", set_toys_per_question_function);
   set_toys.addEventListener("click", set_toys_function);

   blook_rush.addEventListener("click", ()=>{
       if (blook_rush_section.style.display == "none") {
           blook_rush_section.style.display = "block";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none"
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (blook_rush_section.style.display == "block") {
           blook_rush_section.style.display = "none";
       }
   });
   cafe.addEventListener("click", ()=>{
       if (cafe_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "block";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none"
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (cafe_section.style.display == "block") {
           cafe_section.style.display = "none";
       }
   });
   crypto_hack.addEventListener("click", ()=>{
       if (crypto_hack_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "block";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (crypto_hack_section.style.display == "block") {
           crypto_hack_section.style.display = "none";
       }
   });
   deceptive_dinos.addEventListener("click", ()=>{
       if (deceptive_dinos_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "block";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (deceptive_dinos_section.style.display == "block") {
           deceptive_dinos_section.style.display = "none";
       }
   });
   factory.addEventListener("click", ()=>{
       if (factory_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none"
           factory_section.style.display = "block";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (factory_section.style.display == "block") {
           factory_section.style.display = "none";
       }
   });
   fishing_frenzy.addEventListener("click", ()=>{
       if (fishing_frenzy_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none"
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "block";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (fishing_frenzy_section.style.display == "block") {
           fishing_frenzy_section.style.display = "none";
       }
   });
   gold_quest.addEventListener("click", ()=>{
       if (gold_quest_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "block";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (gold_quest_section.style.display == "block") {
           gold_quest_section.style.display = "none";
       }
   });
   monster_brawl.addEventListener("click", ()=>{
       if (monster_brawl_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "block";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (monster_brawl_section.style.display == "block") {
           monster_brawl_section.style.display = "none";
       }
   });
   racing.addEventListener("click", ()=>{
       if (racing_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "block";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (racing_section.style.display == "block") {
           racing_section.style.display = "none";
       }
   });
   santas_workshop.addEventListener("click", ()=>{
       if (santas_workshop_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "block";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "none";
       }
       else if (santas_workshop_section.style.display == "block") {
           santas_workshop_section.style.display = "none";
       }
   });
   tower_defense.addEventListener("click", ()=>{
       if (tower_defense_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "block";
           tower_of_doom_section.style.display = "none";
       }
       else if (tower_defense_section.style.display == "block") {
           tower_defense_section.style.display = "none";
       }
   });
   tower_of_doom.addEventListener("click", ()=>{
       if (tower_of_doom_section.style.display == "none") {
           blook_rush_section.style.display = "none";
           cafe_section.style.display = "none";
           crypto_hack_section.style.display = "none";
           deceptive_dinos_section.style.display = "none";
           factory_section.style.display = "none";
           fishing_frenzy_section.style.display = "none";
           gold_quest_section.style.display = "none";
           monster_brawl_section.style.display = "none";
           racing_section.style.display = "none";
           santas_workshop_section.style.display = "none";
           tower_defense_section.style.display = "none";
           tower_of_doom_section.style.display = "block";
       }
       else if (tower_of_doom_section.style.display == "block") {
           tower_of_doom_section.style.display = "none";
       }
   });

   document.addEventListener("keydown", (event)=>{
       if (event.code == "ShiftRight") {
           gui_open = !gui_open;

           if (gui_open == true) {
               gui.style.display = "block";

               console.log("[Horizon] Opened the GUI.")
           }
           else if (gui_open == false) {
               gui.style.display = "none";

               console.log("[Horizon] Closed the GUI");
           }
       }
   });

   // Hacking scrips

   //TODO Default Scrips
   function all_answers_correct_function() {
       console.log("[Horizon] Hack Activated!")

       setInterval(function() {
           try {
               hack.stateNode.state.question.correctAnswers = hack.stateNode.state.question.answers;
           }
           catch (err) {
               console.log(`[Horizon] There was an error with the hack "All answers Correct" (${err}).`);
           }
       })
   }
   function anti_flood_game_function() {
    try {

    }
    catch (err) {

    }
   }
   function auto_answer_function() {
    try {

    }
    catch (err) {
        
    }
   }
   function auto_sell_dupes_function() {
    try {

    }
    catch (err) {
        
    }
   }
   function flood_game_function() {
    try {

    }
    catch (err) {
        
    }
   }
   function get_daily_reward_function() {
    try {

    }
    catch (err) {
        
    }
   }
   function show_answers_function() {
    try {

    }
    catch (err) {
        
    }
   }
   function anti_ban_function() {
    try {
        const original_open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
        };
    }
    catch (err) {
        
    }
   }

   // Blook Rush Scripts

   // Cafe Scripts

   // Crypto Hack Scripts
   function find_password_function() {
       console.log("[Horizon] Hack Activated!");

       setInterval(function() {
           var pass = hack.stateNode.state.correctPassword;

           for (const a of document.getElementsByClassName("styles__button___2OOoS-camelCase")) {
               if (a.textContent == pass) {
                   a.style = "background-color: limegreen;";
               }
               else {
                   a.style = "background-color: red;";
               }
           }
       });
   }
   function set_crypto_function() {
       var crypto_wanted = parseInt(prompt("How much crypto?"));

       hack.stateNode.setState({
           crypto2: crypto_wanted,
           crypto: crypto_wanted
       })
   }
   function set_password_function() {
       var pass = prompt("What password?");

       hack.stateNode.setState({
           password: pass
       });
   }

   // Deceptive Dinos Scripts
   function set_fossils_function() {
       var fossils_wanted = parseInt(prompt("How many fossils?"));

       hack.stateNode.setState({
           fossils: fossils_wanted
       });
   }

   // Factory Scripts

   // Fishing Frenzy Scripts
   function set_lure_function() {
       var lure_wanted = parseInt(prompt("Lure Value? (1-5)")) - 1;

       hack.stateNode.setState({
           lure: lure_wanted
       })
   }
   function set_weight_function() {
       try {
           var weight_wanted = parseInt(prompt("How much weight?"));

           hack.stateNode.setState({
               weight2: weight_wanted, weight_wanted
           })
       }
       catch (err) {

       }
   }

   // Gold Quest Scripts
   // TODO function chest_esp() {
   //     try {
   //         chests = hack.stateNode.state.choices;


   //     }
   //     catch (err) {

   //     }
   // }
   function set_gold_function() {
       try {
           var gold = Number(parseFloat(prompt("How much gold?")));

           hack.stateNode.setState({
               gold2: gold, gold
           });
       }
       catch (err) {
           console.log("[Horizon] There was an error with the hack" + err)
       }
   }

   // Monster Brawl Scripts

   // Racing Scripts

   // Santas Workshop Scripts
   function set_toys_per_question_function() {
       try {
           var toys = parseInt(prompt("Please enter toys per question:"));
           hack.stateNode.state.toysPerQ = toys;

           console.log("[Horizon] Hack activated!");
       }
       catch (err) {
           console.log(`[Horizon] There was an error activating the hack (${err}).`);
       }
   }
   function set_toys_function() {
       try {
           var toys = parseInt(prompt("Enter toys:"));

           hack.stateNode.state.toys = toys;
       }
       catch (err) {
           console.log(`[Horizon] There was an error activating the hack (${err}).`);
       }
   }

   // Tower Defense Scripts
   function clear_enemies_function() {
       try {
           hack.stateNode.enemies = [];
       }
       catch (err) {

       }
   }
   function max_out_tower_function() {
       try {
           hack.stateNode.towers.forEach(towers => {
               towers.damage = 1e308;
               towers.range = 1e308;
               towers.level = 3;
               towers.blastRadius = 1e308;
               towers.fullCd = 0;
           })
       }
       catch (err) {

       }
   }
   function set_tokens_function() {
       try {
           var tokens_wanted = parseInt(prompt("How many tokens?"));

           hack.stateNode.setState({
               tokens_wanted
           })
       }
       catch (err) {

       }
   }

   // Tower Of Doom Scripts

   console.log("[Horizon] Client installed successfully!");
}
catch (err) {
   console.log(`[Horizon] An error occured while installing the client (${err}).`);
}
finally {
   console.log("[Horizon] Thank you for using horizon <3.");
   console.log("[Horizon] Developed by RawCuriosity");
}

