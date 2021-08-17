# Grid Layout

![](https://miro.medium.com/max/840/1*kuzeYL058uQGHPt8_wuoqg.png)


## Propriedades

* Propriedades do pai
    * grid-template-areas
        * define as "áreas" do grid layout, por meio de nomes específicos, que podem ser atrelados aos filhos
    * grid-template-columns | grid-template-rows
        * definem os tamanhos de cada linha e coluna
        * os valores que forem "auto" se definirão de acordo com o conteúdo dentro deles e o espaço ocupado pelas outras colunas/linhas.
        * o número de valores deve ser igual ao número de linhas/colunas.
* Propriedades dos filhos
    * grid-area
        * serve para atrelar a classe à área da template do elemento pai.
    * grid-column-start | grid-column-end | grid-column | grid-row-start | grid-row-end | grid-row
        * servem para definir o início e fim do elemento no grid layout
        * grid-colum é a união de grid-colum-start e grid-colum-end. O mesmo vale para grid-row.
        Os valores devem ser escritos dessa forma: primeira coluna ou linha / última coluna ou linha + 1




