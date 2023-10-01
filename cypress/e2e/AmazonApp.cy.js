describe('Navegação no Menu', () => {
  beforeEach(()=>{
    cy.visit('https://m4den.github.io/Amazon-Prime/');
  })

  it('Deve navegar para a página Home', () => {
      cy.get('.menu-itens a[href="home.html"]').click()
      cy.url().should('include', 'home.html')
  })

  it('Deve navegar para a página TV Shows', () => {   
      cy.get('.menu-itens a[href="#"]').eq(0).click() // o índice pode variar dependendo da ordem dos links
      cy.url().should('include', '#')
  })

  it('Deve navegar para a página Movies', () => {      
      cy.get('.menu-itens a[href="#"]').eq(1).click() // o índice pode variar dependendo da ordem dos links
      cy.url().should('include', '#')
  })
  it('Deve navegar para a página Login', () => {     
      cy.get('.menu-itens a[href="login.html"]').click()
      cy.url().should('include', 'login.html')
  })
  it('Deve permitir a busca por filmes ou séries', () => {
        cy.get('.input-search input').should('be.visible').type('Nome do filme ou série')
        cy.get('.input-search i').should('be.visible').click()      
  })
  it('Deve abrir o link do Facebook em uma nova guia', () => {      
      cy.get('#rodape a[href="https://www.facebook.com/alex.leandro.0007"]').should('have.attr', 'target', '_blank')
      cy.get('#rodape a[href="https://www.instagram.com/alexdesaran/"]').should('have.attr', 'target', '_blank')
  })
    it('Deve exibir o logo corretamente', () => {
        cy.get('.logo img').should('have.attr', 'src', '../Amazon-Prime/Imagens/Amazon_Logo.png')
    })

    it('Deve permitir a navegação no menu', () => {
        
        cy.contains('a', 'Home').click()
        cy.url().should('eq', 'https://m4den.github.io/Amazon-Prime/home.html')
        cy.contains('a', 'TV Shows').should('be.visible').click()        
        cy.contains('a', 'Movies').should('be.visible').click()        
        cy.contains('a', 'Cadastre-se').should('be.visible').click()       
        cy.contains('a', 'Cadastrar').should('be.visible').click()
    })

    it('Deve permitir a realização de buscas', () => {        
        cy.get('.input-search input').should('be.visible').type('Termo de busca')
        cy.get('.input-search i').should('have.class', 'fas fa-search')
    });

    it('Deve exibir o rodapé corretamente', () => {        
        cy.contains('Copyright © 2021 - by Alécio Leandro De Medeiros')
        cy.get('#rodape a').should('have.length', 2)
        cy.get('#rodape a').first().should('have.attr', 'href', 'https://www.facebook.com/alex.leandro.0007')
        cy.get('#rodape a').last().should('have.attr', 'href', 'https://www.instagram.com/alexdesaran/')
    })


  context('Carregamento de Filmes API Externa', () => {
    it('Deve carregar filmes da API corretamente', () => {        
        cy.get('.card-movie').should('have.length.greaterThan', 0)
    })

    it('Deve exibir banners principais corretamente', () => {
        cy.get('.banner-principal').should('have.length.greaterThan', 0)
    })

    it('Deve obter uma lista de filmes populares', () => {
        cy.request({
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/popular',
          qs: {
            api_key: '506fadb0256c13349acc05dabebf9604',
            language: 'en-US',
            page: 1
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.results).to.be.an('array').that.is.not.empty;
        });
      });
  })

  it('Deve obter os filmes populares', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      qs: {
        api_key: '506fadb0256c13349acc05dabebf9604',
        language: 'en-US',
        page: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results).to.have.length.greaterThan(0);
    });
  });

  it('Deve obter os detalhes de um filme específico', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/550', 
      qs: {
        api_key:  '506fadb0256c13349acc05dabebf9604',
        language: 'en-US'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Fight Club');
    });
  });
})
