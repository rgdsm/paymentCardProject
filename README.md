# Payment Card Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Descrição

Este projeto foi desenvolvido como parte do meu aprendizado em Angular. O principal objetivo foi entender a lógica de funcionamento e a estrutura do framework, sem focar no design neste primeiro momento. A interface simula um sistema de pagamento com cartão, onde o usuário pode inserir os dados do cartão e visualizá-los formatados automaticamente.

## Tecnologias Utilizadas:

- Angular: Framework principal para construir a aplicação.
- TypeScript: Linguagem utilizada no desenvolvimento.
- SASS: Para estilização da interface.
- HTML e CSS: Estruturação e estilização básica da interface.

## Funcionalidades


- Formatação do número do cartão: O número do cartão é automaticamente formatado para incluir espaços a cada 4 dígitos.
- Exibição em tempo real: Os dados do cartão são atualizados em tempo real na interface conforme o usuário os insere.
- Uso de ngModel: Para o binding de dados entre o formulário e os campos de exibição.

## Como Rodar o Projeto

1. Clone este repositório:
git clone https://github.com/rgdsm/paymentCardProject.git

2. Instale as dependências do projeto:
npm install

3. Inicie o servidor de desenvolvimento:
ng serve

4. Abra o navegador e acesse http://localhost:4200

## Melhorias Futuras:


- Design Responsivo: O próximo passo será implementar um design mais refinado, tornando-o responsivo e visualmente mais atraente.
- Validação dos Dados: Adicionar validação de campos para garantir que os dados inseridos, como número do cartão, mês, ano e CVV, sejam válidos.
- Feedback Visual: Melhorar o feedback visual ao usuário, com mensagens de erro ou sucesso após a submissão dos dados.
- Integração com API de Pagamentos: Em um estágio futuro, pretendo integrar o projeto com uma API de pagamentos para simular transações reais.

Estou atualmente aprendendo Angular e explorando as diferentes funcionalidades do framework. Este projeto foi criado com foco na lógica e estrutura do Angular. O design não foi minha prioridade neste momento, mas pretendo melhorar esta parte em versões futuras. Se tiver alguma sugestão ou feedback, fique à vontade para abrir uma issue ou contribuir!
