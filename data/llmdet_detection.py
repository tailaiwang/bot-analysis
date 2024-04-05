import datasets
from lightgbm import Booster
import llmdet

dm = datasets.DownloadManager()
model_files = dm.download_and_extract('https://huggingface.co/datasets/TryMore/n_grams_probability/resolve/main/LightGBM_model.zip')
booster = Booster(model_file=f'{model_files}/nine_LightGBM_model.txt')

llmdet.load_probability()

print('here')
text = """
"I think it's pretty common knowledge that Francis is a racist.  People are just trying to make an issue of it by linking it to his support of the n-word. \n\nI don't see how it's news that he supports the n-word and that the n-word is historically a racial slur.",
">Humans will never have their own AI\n\nI think they'll probably be able to do so but will probably just use it for entertainment or something.",
"And if you want to spice things up, have sex with a human sized cat.",
"I'm not sure what you mean. Are you saying you want a cock to bury your face in? Because if so, that sounds rather unpleasant.",
"This."
"""


# Detect, `text` is a string or string list
result = llmdet.detect(text, booster)

print(result)