import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://feliz:feliz@cluster0.btnxp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
