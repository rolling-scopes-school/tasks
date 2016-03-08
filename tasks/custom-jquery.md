| Deadline | Folder name |
|----------|-------------|
| 09.11.2015| custom-jquery |

### Custom JQuery

Your task is to implement minimal version of JQuery using DOM API
Methods to implement:
* [addClass](http://api.jquery.com/addClass/)
* [append](http://api.jquery.com/append/)
* [html](https://api.jquery.com/html/)
* [attr](http://api.jquery.com/attr/)
* [children](http://api.jquery.com/children/)
* [css](http://api.jquery.com/css/)
* [data](http://api.jquery.com/data/)
* [on](http://api.jquery.com/on/)
* [one](http://api.jquery.com/one/)
* [each](https://api.jquery.com/each/)

### Additional requirements:
* chaining

### Example usage
```javascript

$('.my-class')
	.each(function (index) {
		$(this).html('<b>' + index + '</b>')
	})
	.append($('div'))
	.addClass('my-super-class')
	.css({
		backgroundColor: 'rebeccapurple'
	});

```
