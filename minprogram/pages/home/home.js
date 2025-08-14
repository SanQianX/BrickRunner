Page({
    data: {
      imgSrcs: [
        '../../assets/images/banner1.jpg',
        '../../assets/images/banner2.jpg',
        '../../assets/images/banner3.jpg',
      ],
      novelTabs: [
        { id: 1, name: '诡秘之主' },
        { id: 2, name: '大奉打更人' },
        { id: 3, name: '长夜余火' },
        { id: 4, name: '斗破苍穹' },
        { id: 5, name: '将夜' },
        { id: 6, name: '雪中悍刀行' },
        { id: 7, name: '凡人修仙传' },
        { id: 8, name: '一念永恒' },
        { id: 9, name: '剑来' },
        { id: 10, name: '星门' },
      ],
      activeTab: 0,
      chapters: [],
      filteredChapters: [],
      searchKeyword: '',
      pageLoading: false
    },
  
    onLoad() {
      this.loadChapters(0);
    },
  
    onTabClick(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({ activeTab: index });
      this.loadChapters(index);
    },
  
    loadChapters(index) {
      this.setData({ pageLoading: true });
      const novelId = this.data.novelTabs[index].id;
      const novelName = this.data.novelTabs[index].name;
  
      setTimeout(() => {
        const fakeChapters = Array.from({ length: 100 }, (_, i) => ({
          id: `${novelId}-${i + 1}`,
          title: `【${novelName}】第${i + 1}章 章节标题调试`
        }));
  
        this.setData({
          chapters: fakeChapters,
          filteredChapters: fakeChapters,
          pageLoading: false,
          searchKeyword: ''
        });
      }, 300);
    },
  
    onSearchInput(e) {
      this.setData({ searchKeyword: e.detail.value });
    },
  
    onSearchClick() {
      const keyword = this.data.searchKeyword.trim();
      if (!keyword) {
        this.setData({ filteredChapters: this.data.chapters });
        return;
      }
      const filtered = this.data.chapters.filter(ch =>
        ch.title.includes(keyword)
      );
      this.setData({ filteredChapters: filtered });
    },
  
    onChapterClick(e) {
      const chapter = e.currentTarget.dataset.chapter;
      wx.showToast({
        title: `打开 ${chapter.title}`,
        icon: 'none',
        duration: 1500
      });
    }
  });
  