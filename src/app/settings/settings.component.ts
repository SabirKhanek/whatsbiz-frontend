import { ToastrService } from 'ngx-toastr';
import { ConfigSaveRequest } from '../types/api_responses.type';
import { SettingsService } from './../services/settings/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  config_fields = [
    {
      label: 'OpenAI Key',
      key: 'openai_key',
      type: 'text',
      error: '',
      value: '',
      placeholder: 'Enter openai key...'
    },
    {
      label: 'New Message Interval(minutes)',
      key: 'newMessageInterval',
      type: 'number',
      error: '',
      value: '',
      placeholder: 'Enter interval...',
    }
  ];

  constructor(private settingService: SettingsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.settingService.getSettings().subscribe(settings => {
      settings.forEach(setting => {
        const field = this.config_fields.find(f => f.key === setting.key);
        if (field) {
          field.value = setting.value;
        }
      });
    });
  }

  saveConfig() {
    const pairs: ConfigSaveRequest = {
      "pairs": this.config_fields.map(field => {
        return {
          key: field.key.toString(),
          value: field.value.toString()
        }
      })
    }

    this.settingService.saveSettings(pairs).subscribe((resp) => {
      const errors = resp.filter(r => r.error);
      const success = resp.filter(r => !r.error);
      errors.forEach((r) => {
        const field = this.config_fields.find(f => f.key === r.key);
        if (field) {
          field.error = r.error || '';
        }
      })
      success.forEach((r) => {
        const field = this.config_fields.find(f => f.key === r.key);
        if (field) {
          field.error = '';
          field.value = r.value.toString();
        }
      })
      this.toastr.info(`${success.length} out of ${errors.length + success.length} settings saved successfully!`);
    })
  }
}
