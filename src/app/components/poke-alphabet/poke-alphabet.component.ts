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
  pokemons: any = [];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.pokeService.getPokemons(1).subscribe((pokemons: number) => {


      for (const pokemon of this.pokemons) {
        const firstLetter = pokemon.name[1].toUpperCase();
        if (this.counts[firstLetter]) {
          this.counts[firstLetter]++;
        } else {
          this.counts[firstLetter] = 1;
        }
      }
    });
  }
}
