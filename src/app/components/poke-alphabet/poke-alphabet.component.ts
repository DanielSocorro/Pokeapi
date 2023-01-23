import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-alphabet',
  templateUrl: './poke-alphabet.component.html',
  styleUrls: ['./poke-alphabet.component.scss']
})

export class PokeAlphabetComponent implements OnInit {
  counts: { [letter: string]: number } = {};
  pokemons: any = [];
  letters: string[] = [];

  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    let allPokemons: any[] = [];
    for (let i = 1; i <= 905; i++) {
      this.pokeService.getPokemons(i).subscribe((pokemon: any) => {
        allPokemons.push(pokemon);
        if (i === 905) {
          this.pokemons = allPokemons;
          for (const pokemon of allPokemons) {
            const firstLetter = pokemon.name[0].toUpperCase();
            if (this.counts[firstLetter]) {
              this.counts[firstLetter]++;
            } else {
              this.counts[firstLetter] = 1;
            }
          }
          this.letters = Object.keys(this.counts);
          this.letters.sort();
        }
      });
    }
  }
}
