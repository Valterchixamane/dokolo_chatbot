// Importa a biblioteca venom-bot
const venom = require("venom-bot");

// Função para normalizar a string removendo acentos
const normalizeString = (str) => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Função para responder às perguntas do usuário
const respondToQuestion = (question, historico) => {
  const normalizedQuestion = normalizeString(question);

  // Verifica se a questao tem a palavra chave e caso tenha retorna o menu
  if (normalizedQuestion.includes(normalizeString("ola"))) {
    const menu = "Olá, 🍽 Bem-Vindo(a) ao *Dhocolo Talho e Churrasqueira* Bar e Grill! 🥩🍗🍖. Para continuar, digite o número da opção desejada: \n" +
                 "1️⃣ - Nosso Menu\n" +
                 "2️⃣ - Horários de Funcionamento\n" +
                 "3️⃣ - A Localização\n" +
                 "4️⃣ - 📅 Fazer Encomenda/Reserva\n\n" +
                 "Por favor, selecione uma das opções digitando o número correspondente.";
    return menu;
  }

  if (normalizedQuestion.includes(normalizeString("oi"))) {
    const menu = "Oi, 🍽 Bem-Vindo(a) ao *Dhocolo Talho e Churrasqueira* Bar e Grill! 🥩🍗🍖. Para continuar, digite o número da opção desejada: \n" +
                 "1️⃣ - Nosso Menu\n" +
                 "2️⃣ - Horários de Funcionamento\n" +
                 "3️⃣ - A Localização\n" +
                 "4️⃣ - 📅 Fazer Encomenda/Reserva\n\n" +
                 "Por favor, selecione uma das opções digitando o número correspondente.";
    return menu;
  }

  if (normalizedQuestion.includes(normalizeString("bom dia"))) {
    const menu = "Bom dia, 🍽 Bem-Vindo(a) ao *Dhocolo Talho e Churrasqueira* Bar e Grill! 🥩🍗🍖. Para continuar, digite o número da opção desejada: \n" +
                 "1️⃣ - Nosso Menu\n" +
                 "2️⃣ - Horários de Funcionamento\n" +
                 "3️⃣ - A Localização\n" +
                 "4️⃣ - 📅 Fazer Encomenda/Reserva\n\n" +
                 "Por favor, selecione uma das opções digitando o número correspondente.";
    return menu;
  }

  if (normalizedQuestion.includes(normalizeString("boa tarde"))) {
    const menu = "Boa Tarde, 🍽 Bem-Vindo(a) ao *Dhocolo Talho e Churrasqueira* Bar e Grill! 🥩🍗🍖. Para continuar, digite o número da opção desejada: \n" +
                 "1️⃣ - Nosso Menu\n" +
                 "2️⃣ - Horários de Funcionamento\n" +
                 "3️⃣ - A Localização\n" +
                 "4️⃣ - 📅 Fazer Encomenda/Reserva\n\n" +
                 "Por favor, selecione uma das opções digitando o número correspondente.";
    return menu;
  }

  if (normalizedQuestion.includes(normalizeString("boa noite"))) {
    const menu = "Boa noite 🍽 Bem-Vindo(a) ao *Dhocolo Talho e Churrasqueira* Bar e Grill! 🥩🍗🍖. Para continuar, digite o número da opção desejada: \n" +
                 "1️⃣ - Nosso Menu\n" +
                 "2️⃣ - Horários de Funcionamento\n" +
                 "3️⃣ - A Localização\n" +
                 "4️⃣ - 📅 Fazer Encomenda/Reserva\n\n" +
                 "Por favor, selecione uma das opções digitando o número correspondente.";
    return menu;
  }

  // Verifica se o usuário selecionou uma opção do menu e retorna o submenu correspondente
  if (historico.length > 0 && historico[historico.length - 1].role === "user") {
    const lastUserMessage = normalizeString(historico[historico.length - 1].content);
    if (lastUserMessage === "1") {
      // Resposta para a opção 1
      return "🍽 *Dhocolo Talho e Churrasqueira* 🍽️🥩🍗🍖\n\n" +
             "*Menu 1️ - Pratos (300gr):*\n" +
             "Babalaza + (Batata/Arroz/Xima C/Salada) - 500.00MT\n" +
             "Picanha + (Batata/Arroz/Xima C/Salada) - 800.00MT\n" +
             "T-Bone/Chuck + (Batata/Arroz/Xima C/Salada) - 600.00MT\n" +
             "Worse + (Batata/Arroz/Xima C/Salada) – 500.00MT\n" +
             "Dose De Frango/Worse + (Batata/Arroz/Xima C/Salada) - 300.00MT\n" +
             "📝 *Nota*: Doses Disponíveis Apenas: 2a A 5a Feira 10:00hr Ás 18:00hr.\n\n" +
             
            "*Menu 2️ - Carnes por Kilo:*\n" +
            "Babalaza Worse (Picante) - 900.00MT\n" +
            "Chuck - 1200.00MT\n" +
            "Costeleta De Cabrito - 1200.00MT\n" +
            "Costeleta De Vaca - 1200.00MT\n" +
            "1/2 Frango + (Batata/Arroz/Xima C/Salada) - 550.00MT\n" +
            "Frango Inteiro + (Batata/Arroz/Xima C/Salada) - 850.00MT\n" +
            "Picanha - 1800.00MT\n" +
            "T-Bone - 1200.00MT\n" +
            "Worse - 800.00MT\n"+
            "📝 *NOTA*: Quantidade Mínima 500gr sem acompanhantes\n\n" +

            "*Menu 3️ - Mariscos:*\n" +
            "Lula Grelhada Na Brasa (Batata/Arroz/Xima C/Salada) - 950.00MT\n" +
            "Peixe Grelhado Na Brasa (Batata/Arroz/Xima C/Salada) - 800.00MT\n" +
            "---\n" +
            "Veja o Menu Completo : https://wa.me/c/258844059160\n\n" +

            "Digite 0️⃣ para voltar ao menu principal.\n"

    } else if (lastUserMessage === "2") {
      // Resposta para a opção 2
      return "🕒 *Horários de Funcionamento:*\n\n" +
         "📅 *Segunda a Quinta-Feira:* 10:00h – 22:00h\n\n" +
         "📅 *Sexta-Feira:* 10:00h – 23:59h\n" +
         "🎤 *Evento de Karaoke Aberto: 18:00-23:00h*\n\n" +
         "📅 **Sábado:** 10:00h – 23:59h\n" +
         "🎤 *Evento de Karaoke Aberto: 18:00-23:00h*\n\n" +
         "📅 *Domingo:** 10:00h – 23:59h*\n" +
         "🎤 *Evento de Karaoke Aberto: 18:00-23:00h*\n\n" +

         "Digite 0️⃣ para voltar ao menu principal.\n"

    } else if (lastUserMessage === "3") {
      // Resposta para a opção 3
      return "📍 *Localização:*\n\n" +
         "O nosso restaurante está localizado na:\n"+
         "Av. De Moçambique, *Choupal* ao lado do Edifício *Sombra Matsinhe*.\n\n" +
         "Ou,\n\n" +
         "🗺 clique neste link para obter a localização exacta: [Localização no Mapa](https://maps.app.goo.gl/RM5hSwBbF8rt8wmK9)\n\n" + 
      
         "Digite 0️⃣ para voltar ao menu principal.\n"
    } else if (lastUserMessage === "4") {
      // Resposta para a opção 4
      return "Para fazer uma *Encomenda/Reserva* siga os seguintes passos:\n" +
       "1. 📲 Ligue e entre em contacto connosco pelo telefone: +258 84 405 9160.\n" +
       "2. 📅 Informe-nos a data e horário desejados para a reserva.\n" +
       "3. 🍽 Confirme o número de pessoas e quaisquer necessidades especiais, como comemorações.\n" +
       "4. 🕒 Aguarde nossa confirmação e pronto! Sua reserva estará garantida.\n\n" +

       "Digite 0️⃣ para voltar ao menu principal.\n"
    } else if (lastUserMessage === "0") {
      // Resposta para voltar ao menu principal
      return respondToQuestion("ola", []);
    }
  }

  // Outras respostas conforme o código original...
  // Aqui você pode adicionar outras respostas de acordo com as necessidades do seu bot
  return "Desculpe, selecionou uma opção inexistente.";
};

// Criação do cliente do WhatsApp
venom.create({
  session: "chatGPT_BOT",
  multidevice: true
})
  .then((client) => start(client))
  .catch((err) => console.log(err));

// Função para iniciar o bot
const start = (client) => {
  // Evento de mensagem recebida
  client.onMessage((message) => {
    // Registro do histórico de conversa
    const historicoUsuario = { num: message.from, historico: [] };
    historicoUsuario.historico.push({ role: "user", content: message.body });

    const assistantResponse = respondToQuestion(message.body, historicoUsuario.historico);
    historicoUsuario.historico.push({ role: "assistant", content: assistantResponse });

    client.sendText(message.from, assistantResponse);
  });
};
