import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { calendarType } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-lib';
  row: calendarType = {
    type: 'day',
    date: new Date(),
    containDarkMode: true,
    locale: 'en',
    backgroundColorPrimary: '#F1BF98',
    backgroundColorSecondary: 'rgba(63, 81, 181, 0.2)',
    // maxDate: new Date(),
    minDate: new Date('2021-01-01'),
  };
  format: string = 'dd/MM/yyyy';
  formHeader: FormGroup;
  formats = [
    { value: 'day', label: 'Day' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
  ];
  locales = [
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'zh', label: 'Chinese' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
    { value: 'fr', label: 'French' },
    { value: 'it', label: 'Italian' },
    { value: 'ni', label: 'Nicaragua' },
    { value: 'th', label: 'tailandia' },
    { value: 'tw', label: 'Taiwan' },
    { value: 'se', label: 'Sweden' },
    { value: 'hu', label: 'Hungary' },
    { value: 'lt', label: 'Lithuania' },
    { value: 'kr', label: 'South Korea' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formHeader = this.fb.group({
      date: [],
      format: ['dd/MM/yyyy'],
      locale: ['en'],
      backgroundPrimary: ['#F1BF98'],
      backgroundSecondary: ['rgba(63, 81, 181, 0.2)'],
    });

    this.f.format.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.type = value.toLowerCase();
    });

    this.f.locale.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.locale = this.locales.find((locale) => locale.label === value)
        ?.value as any;
    });

    this.f.date.valueChanges.subscribe((value) => {});

    this.f.backgroundPrimary.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.backgroundColorPrimary = value;
    });

    this.f.backgroundSecondary.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.backgroundColorSecondary = value;
    });
  }

  get f() {
    return this.formHeader.controls;
  }

  get date() {
    return this.formHeader.get('date') as FormControl;
  }
}
