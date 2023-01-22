import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-poke-alphabet',
  templateUrl: './poke-alphabet.component.html',
  styleUrls: ['./poke-alphabet.component.scss']
})

export class PokeAlphabetComponent implements OnInit {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  counts: { [letter: string]: number } = {};
 pokemons: any[] = [];

  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.pokeService.getPokemons(1).subscribe((pokemons: any) => {
      this.pokemons = pokemons;
    // Recorrer todos los pokemons y contar cuantos inician con cada letra
    for (const pokemon of this.pokemons) {
      const firstLetter = pokemon.name[0].toUpperCase();
      if (this.counts[firstLetter]) {
        this.counts[firstLetter]++;
      } else {
        this.counts[firstLetter] = 1;
      }
    }
  })
}
}
