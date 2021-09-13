import feedparser

NewsFeed = feedparser.parse("https://theconversation.com/us/topics/cryptocurrency-8321/articles.atom")

print 'Number of RSS posts :', len(NewsFeed.entries)

entry = NewsFeed.entries[1]
print 'Post Title :', entry.title
