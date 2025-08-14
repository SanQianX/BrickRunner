Component({
    methods: {
      switchTab(e) {
        const url = e.currentTarget.dataset.url;
        wx.switchTab({ url });
      }
    }
  });
  