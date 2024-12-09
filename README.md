# AI Text Summarizer

This is a website which uses BART (large-sized model), fine-tuned on CNN Daily Mail. BART is particularly effective when fine-tuned for text generation (e.g. summarization, translation) but also works well for comprehension tasks (e.g. text classification, question answering). This particular checkpoint has been fine-tuned on CNN Daily Mail, a large collection of text-summary pairs.

## Installation 

Clone the repository into your local desktop using 

``` bash
git clone https://github.com/chipper1211/AI-Text-Summarizer.git
```

## Usage

Make sure you have Node previously installed in your workspace

Navigate to your local repository where the project is cloned

Make sure to install all the dependencies by running

``` bash
npm install
```

Get your personal access token from [Hugginggface] (https://huggingface.co/) and replace it in the index.js file 

Run the index.js file by executing the below command 

``` bash
node index.js
```

## Contributing 

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
