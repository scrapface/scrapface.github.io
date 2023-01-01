#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

#[tauri::command]
async fn open_launcher(window: tauri::Window) {
  window.get_window("main").unwrap().hide().unwrap();
  window.get_window("launcher").unwrap().show().unwrap();
}

#[tauri::command]
async fn close_launcher(window: tauri::Window) {
  window.get_window("launcher").unwrap().hide().unwrap();
  window.get_window("main").unwrap().show().unwrap();
}

fn main() {
  tauri::Builder::default()
    .on_window_event(|event| match event.event() {
      tauri::WindowEvent::CloseRequested {..} => {
        let handle = event.window().app_handle();
        handle.exit(0);
      }
      _ => {}
    })
    .invoke_handler(tauri::generate_handler![close_launcher, open_launcher])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
