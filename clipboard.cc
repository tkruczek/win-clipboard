//#include <node.h>
//#include <v8.h>
#include <nan.h>

//using namespace v8;

int getClipboardFormatsCount() {
    int numFormats;
    numFormats = CountClipboardFormats();
    return numFormats;
}

v8::Local<v8::Array> getClipboardFormats() {
    v8::Local<v8::Array> formats;
    int numFormats;
    UINT format = 0;
    uint32_t item = 0;
    if (OpenClipboard(nullptr)) {
        numFormats = CountClipboardFormats();

        if (numFormats) {
            formats = v8::Array::New(numFormats);
            while (format = EnumClipboardFormats(format)) {
                v8::Local<v8::Integer> f =  v8::Integer::NewFromUnsigned(format);
                formats->Set(item++, f);
            }
        }

        CloseClipboard();
    }

    return formats;
}


v8::Local<v8::String> getClipboard(UINT format) {
    HGLOBAL   hglb;
    char * pszText;
    v8::Local<v8::String> text;

    if (IsClipboardFormatAvailable(format) && OpenClipboard(nullptr)) {
        hglb = GetClipboardData(format);
        if (hglb != NULL) {
            pszText = static_cast<char*>( GlobalLock(hglb) );
            if (pszText != NULL) {
                text = v8::String::New( pszText , strlen(pszText));
                GlobalUnlock(hglb);
            }
        }
        CloseClipboard();
    }

    return text;

}

void getClipboardMethod(const Nan::FunctionCallbackInfo<v8::Value>& info) {

  info.GetReturnValue().Set(getClipboard((uint32_t) (info[0]->Uint32Value())));
}

void GetClipboardFormatsCountMethod(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    info.GetReturnValue().Set(getClipboardFormatsCount());
}

void GetClipboardFormatsMethod(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(getClipboardFormats());
}

void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("getData").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(getClipboardMethod)->GetFunction());

  exports->Set(Nan::New("getFormatsCount").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(GetClipboardFormatsCountMethod)->GetFunction());

  exports->Set(Nan::New("getFormats").ToLocalChecked(),
                Nan::New<v8::FunctionTemplate>(GetClipboardFormatsMethod)->GetFunction());
}

NODE_MODULE(clipboard, Init)
