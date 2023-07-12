import { Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';

@Component({
  selector: 'app-whatsapp-composer',
  templateUrl: './whatsapp-composer.component.html',
  styleUrls: ['./whatsapp-composer.component.scss']
})
export class WhatsappComposerComponent implements OnInit, OnChanges {
  htmlText = '';
  hasFocus = false;
  subject: string;
  @Input('text') text: string = '';
  @Output('textChange') textChange = new EventEmitter<string>();


  transformToWhatsappFormat(): string {
    let transformedMessage: string = this.htmlText;

    transformedMessage = transformedMessage.replace(/<p><br><\/p>/g, '\n');

    transformedMessage = transformedMessage.replace(/<p>/g, '');
    transformedMessage = transformedMessage.replace(/<\/?p>/g, '\n');

    // Apply bold formatting
    transformedMessage = transformedMessage.replace(
      /<strong> *(.*?) *<\/strong>/g,
      '*$1*'
    );

    // Apply italic formatting
    transformedMessage = transformedMessage.replace(/<em> *(.*?) *<\/em>/g, '_$1_');

    // Apply strikethrough formatting
    transformedMessage = transformedMessage.replace(/<s> *(.*?) *<\/s>/g, '~$1~');

    // Apply code block formatting
    transformedMessage = transformedMessage.replace(
      /<pre class="ql-syntax" spellcheck="false">/g,
      '```'
    );
    transformedMessage = transformedMessage.replace(/<\/pre>/g, '```');

    // Transform ordered list (ol)
    transformedMessage = transformedMessage.replace(
      /<ol>([\s\S]*?)<\/ol>/g,
      (match, listItems) => {
        const listItemArray = listItems.match(/<li>(.*?)<\/li>/g);
        let transformedList = '';
        listItemArray.forEach((item: any, index: any) => {
          const listItemContent = item.replace(/<li>(.*?)<\/li>/, '$1');
          transformedList += `${index + 1}. ${listItemContent}\n`;
        });
        return transformedList;
      }
    );

    // Transform unordered list (ul)
    transformedMessage = transformedMessage.replace(
      /<ul>([\s\S]*?)<\/ul>/g,
      (match, listItems) => {
        const listItemArray = listItems.match(/<li>(.*?)<\/li>/g);
        let transformedList = '';
        listItemArray.forEach((item: any) => {
          const listItemContent = item.replace(/<li>(.*?)<\/li>/, '$1');
          transformedList += `- ${listItemContent}\n`;
        });
        return transformedList;
      }
    );

    transformedMessage = this.transformEmoji(transformedMessage)

    return transformedMessage;
  }

  WaFormatToHtml(): string {
    let htmlContent: string = this.text;

    // Convert bold formatting
    htmlContent = htmlContent.replace(/\*(.*?)\*/g, '<strong>$1</strong>');

    // Convert italic formatting
    htmlContent = htmlContent.replace(/_(.*?)_/g, '<em>$1</em>');

    // Convert strikethrough formatting
    htmlContent = htmlContent.replace(/~(.*?)~/g, '<s>$1</s>');

    // Convert code block formatting
    htmlContent = htmlContent.replace(/```([\s\S]*?)```/g, '<pre class="ql-syntax" spellcheck="false">$1</pre>');

    // Convert new line characters to <p></p>
    htmlContent = htmlContent.replace(/\n/g, '<br>').trim();

    // Wrap each line with <p> tags
    const lines = htmlContent.split('<br>');
    htmlContent = lines.map(line => `<p>${line === '' ? '<br>' : line}</p>`).join('');

    return htmlContent;
  }

  transformEmoji(input: string): string {
    let transformedMessage = input
    transformedMessage = transformedMessage.replace(
      /<span class="ql-emojiblot" data-name="(.*?)">.*?<span class="ap ap-(.*?)">(.*?)<\/span><\/span>/g,
      (match, name, emojiCode, emojiText) => {
        return emojiText;
      }
    );

    transformedMessage = transformedMessage.replace(/<\/span>/g, '')
    return transformedMessage
  }

  ngOnInit() {
    this.htmlText = this.WaFormatToHtml();
  }

  ngOnChanges() {
    // If the text is changed from outside the component, update the htmlText but 
    this.htmlText = this.WaFormatToHtml();
  }


  onBlur() {
    // this.htmlText = this.transformEmoji(this.htmlText)
    this.text = this.transformToWhatsappFormat();
    this.textChange.emit(this.text.trim());
  }

  quillConfig = {
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'strike'], // toggled buttons
        ['code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }], ['emoji'],
      ],
    }, 'emoji-toolbar': true,
    "emoji-shortname": true,
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter: {
          key: 13,
          handler: (range: any, context: any) => {
            console.log('enter');
            return true;
          },
        },
      },
    },
  };
}
